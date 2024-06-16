import {DB} from '../adapters/database_adapter';
import {IRepository, IRepositoryData, IRepositoryParam} from './IRepository';
import {logger} from '../utils/log_util';
import moment from 'moment';
import {Knex} from 'knex';
import {databaseFormat} from '../utils/time_util';
export interface IUserRepositoryData extends IRepositoryData {
  name?: string;
  dob?: string;
}
export interface IUserRepositoryParam extends IRepositoryParam {
  q?: IUserRepositoryData;
}

export class UserRepository implements IRepository {
  static table = 'mst_user';

  static find(param?: IUserRepositoryParam) {
    const query = DB<IUserRepositoryData>(this.table);
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
    param?: IUserRepositoryParam
  ): Promise<Array<IUserRepositoryData>> {
    const query = this.find(param);
    logger.debug(query.toQuery());
    return query;
  }

  static findOne(
    param?: IUserRepositoryParam
  ): Promise<IUserRepositoryData | undefined> {
    const query = this.find(param);
    logger.debug(query.toQuery());
    return query.first();
  }

  static create(
    data: IUserRepositoryData,
    t: Knex.Transaction | null = null
  ): Promise<number> {
    const q = DB<any>(this.table);

    if (t) {
      q.transacting(t);
    }

    data.created_at = databaseFormat(moment());

    return q.insert(data).then(result => result[0]);
  }

  static update(
    param: IUserRepositoryParam,
    data: IUserRepositoryData,
    t: Knex.Transaction | null = null
  ): Knex.QueryBuilder<IUserRepositoryData, number> {
    const q = this.find(param);

    if (t) {
      q.transacting(t);
    }

    data.updated_at = databaseFormat(moment());

    return q.update(data);
  }

  static destroy(
    param: IUserRepositoryParam,
    t: Knex.Transaction | null = null
  ): Knex.QueryBuilder<IUserRepositoryData, number> {
    const q = this.find(param);

    if (t) {
      q.transacting(t);
    }

    return q.update({
      deleted_at: databaseFormat(moment()),
    });
  }
}
