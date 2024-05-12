/* eslint-disable @typescript-eslint/no-explicit-any */
interface IRepository {
  table?: string;
  findAll?: (data: IRepositoryParam) => any;
  findOne?: (data: IRepositoryParam) => any;
  create?: () => any;
  update?: () => any;
  destroy?: () => any;
}

interface IRepositoryParam {
  q?: {
    id?: number;
  };
  t?: any;
}

interface IRepositoryData {
  id?: number;
  uuid?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  created_by?: number;
  updated_by?: number;
  deleted_by?: number;
}

export {IRepository, IRepositoryData, IRepositoryParam};
