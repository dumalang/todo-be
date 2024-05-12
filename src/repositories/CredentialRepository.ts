import {DB} from '../adapters/database_adapter';
import {IRepository, IRepositoryData, IRepositoryParam} from './IRepository';
import {logger} from '../utils/log_util';
import moment from 'moment';
import {Knex} from 'knex';
import {databaseFormat} from '../utils/time_util';

export enum ECredentialType {
  EMAIL = 'email',
  PHONE = 'phone',
  USERNAME = 'username',
  FACEBOOK = 'facebook',
  GOOGLE = 'google',
}
export interface ICredentialRepositoryData extends IRepositoryData {
  mst_user_id?: number;
  credential?: string;
  type?: ECredentialType;
  password?: string;
}
export interface ICredentialRepositoryParam extends IRepositoryParam {
  q?: ICredentialRepositoryData;
}

export class CredentialRepository implements IRepository {
  static table = 'mst_credential';

  static find(param?: ICredentialRepositoryParam) {
    const query = DB<ICredentialRepositoryData>(this.table);
    if (param) {
      // @ts-ignore
      for (const key: string in param.q) {
        // @ts-ignore
        if (param.q[key]) {
          // @ts-ignore
          query.where(key, param.q[key]);
        }
      }
    }
    return query;
  }

  static findAll(
    param?: ICredentialRepositoryParam
  ): Promise<Array<ICredentialRepositoryData>> {
    const query = this.find(param);
    logger.debug(query.toQuery());
    return query;
  }

  static findOne(
    param?: ICredentialRepositoryParam
  ): Promise<ICredentialRepositoryData | undefined> {
    const query = this.find(param);
    logger.debug(query.toQuery());
    return query.first();
  }

  static create(
    data: ICredentialRepositoryData,
    t: Knex.Transaction | null = null
  ): Knex.QueryBuilder<ICredentialRepositoryData, number[]> {
    const q = DB<any>(this.table);

    if (t) {
      q.transacting(t);
    }

    data.created_at = databaseFormat(moment());

    return q.insert(data);
  }

  static update(
    param: ICredentialRepositoryParam,
    data: ICredentialRepositoryData,
    t: Knex.Transaction | null = null
  ): Knex.QueryBuilder<ICredentialRepositoryData, number> {
    const q = this.find(param);

    if (t) {
      q.transacting(t);
    }

    data.updated_at = databaseFormat(moment());

    return q.update(data);
  }

  static destroy(
    param: ICredentialRepositoryParam,
    t: Knex.Transaction | null = null
  ): Knex.QueryBuilder<ICredentialRepositoryData, number> {
    const q = this.find(param);

    if (t) {
      q.transacting(t);
    }

    return q.update({
      deleted_at: databaseFormat(moment()),
    });
  }
}
