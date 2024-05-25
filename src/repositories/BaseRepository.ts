import {DB} from '../adapters/database_adapter';
import {IRepositoryData, IRepositoryParam} from './IRepository';
import {logger} from '../utils/log_util';
import moment from 'moment';
import {Knex} from 'knex';
import {databaseFormat} from '../utils/time_util';

// @ts-ignore
export const BaseRepository = <
  Param extends IRepositoryParam,
  Data extends IRepositoryData
>() => {
  abstract class BaseRepository {
    static table: string;

    static findQuery(param?: Param): Knex.QueryBuilder {
      const query = DB<Data>(this.table);
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

    public static async findAll(param?: Param): Promise<Data[]> {
      return this.findQuery(param);
    }

    public static async findOne(
      param?: Param
    ): Promise<Partial<Data> | undefined> {
      const query = this.findQuery(param);
      logger.debug(query.toQuery());
      return query.first();
    }

    public static async create(
      data: Partial<Data>,
      t: Knex.Transaction | null = null
    ): Promise<Knex.QueryBuilder<Partial<Data>, number>> {
      const q = DB<any>(this.table);

      if (t) {
        q.transacting(t);
      }

      data.created_at = databaseFormat(moment());

      return q.insert(data).then(result => result[0]);
    }

    public static async update(
      param: Param,
      data: Data,
      t: Knex.Transaction | null = null
    ): Promise<Knex.QueryBuilder<IRepositoryData, number>> {
      const q = this.findQuery(param);

      if (t) {
        q.transacting(t);
      }

      data.updated_at = databaseFormat(moment());

      return q.update(data);
    }
    public static async destroy(
      param: Param,
      t: Knex.Transaction | null = null
    ): Promise<Knex.QueryBuilder<Data, number>> {
      const q = this.findQuery(param);

      if (t) {
        q.transacting(t);
      }

      return q.update({
        deleted_at: databaseFormat(moment()),
      });
    }
  }
  return BaseRepository;
};
