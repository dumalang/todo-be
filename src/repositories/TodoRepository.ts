import {IRepositoryData, IRepositoryParam} from './IRepository';
import {BaseRepository} from './BaseRepository';
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

export class TodoRepository extends BaseRepository<
  ITodoRepositoryParam,
  ITodoRepositoryData
>() {
  static table = 'mst_todo';
}
