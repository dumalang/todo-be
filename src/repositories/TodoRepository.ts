import {DB} from '../adapters/database_adapter';
import {IRepository, IRepositoryData, IRepositoryParam} from './IRepository';
import {logger} from '../utils/log_util';
import moment from 'moment';
import {Knex} from 'knex';
import {databaseFormat} from '../utils/time_util';
export enum ERepeatPeriod {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  BIWEEKLY = 'biweekly',
  MONTHLY = 'monthly',
}
export interface ITodoRepositoryData extends IRepositoryData {
  todo?: string;
  desc?: string;
  day?: number;
  month?: number;
  time_start_at?: string;
  time_end_at?: string;
  repeat?: string;
  repeat_period?: ERepeatPeriod;
}
export interface ITodoRepositoryParam extends IRepositoryParam {
  q?: ITodoRepositoryData;
}

export class TodoRepository implements IRepository {
  static table = 'mst_todo';

  static find(param?: ITodoRepositoryParam) {
    const query = DB<ITodoRepositoryData>(this.table);
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
    param?: ITodoRepositoryParam
  ): Promise<Array<ITodoRepositoryData>> {
    const query = this.find(param);
    logger.debug(query.toQuery());
    return query;
  }

  static findOne(
    param?: ITodoRepositoryParam
  ): Promise<ITodoRepositoryData | undefined> {
    const query = this.find(param);
    logger.debug(query.toQuery());
    return query.first();
  }

  static create(
    data: ITodoRepositoryData,
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
    param: ITodoRepositoryParam,
    data: ITodoRepositoryData,
    t: Knex.Transaction | null = null
  ): Knex.QueryBuilder<ITodoRepositoryData, number> {
    const q = this.find(param);

    if (t) {
      q.transacting(t);
    }

    data.updated_at = databaseFormat(moment());

    return q.update(data);
  }

  static destroy(
    param: ITodoRepositoryParam,
    t: Knex.Transaction | null = null
  ): Knex.QueryBuilder<ITodoRepositoryData, number> {
    const q = this.find(param);

    if (t) {
      q.transacting(t);
    }

    return q.update({
      deleted_at: databaseFormat(moment()),
    });
  }
}
