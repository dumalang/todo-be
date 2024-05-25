import {IRepositoryData, IRepositoryParam} from './IRepository';
import {BaseRepository} from './BaseRepository';
export interface IUserRepositoryData extends IRepositoryData {
  name?: string;
  dob?: string;
}
export interface IUserRepositoryParam extends IRepositoryParam {
  q?: IUserRepositoryData;
}

export class UserRepository extends BaseRepository<
  IUserRepositoryParam,
  IUserRepositoryData
>() {
  static table = 'mst_user';
}
