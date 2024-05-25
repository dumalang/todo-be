import {IRepositoryData, IRepositoryParam} from './IRepository';
import {BaseRepository} from './BaseRepository';

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

// @ts-ignore
export class CredentialRepository extends BaseRepository<
  ICredentialRepositoryParam,
  ICredentialRepositoryData
>() {
  static table = 'mst_credential';
}
