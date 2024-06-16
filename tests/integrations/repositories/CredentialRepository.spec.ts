import {
  CredentialRepository,
  ICredentialRepositoryData,
} from '../../../src/repositories/CredentialRepository';
import {CredentialRepositoryDataFactory} from '../../factories/CredentialRepositoryDataFactory';

const createData: ICredentialRepositoryData =
  CredentialRepositoryDataFactory.build();
describe('Credential Repository Crud Test', () => {
  beforeEach(async () => {
    await CredentialRepository.create(createData);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('create success', async () => {
    const createResult = await CredentialRepository.create(createData);
    expect(createResult).toEqual(expect.any(Number));
  });
  it('findOne success', async () => {
    const createResult = await CredentialRepository.create(createData);
    const findOneResult = await CredentialRepository.findOne({
      q: {
        id: createResult,
      },
    });
    expect(findOneResult?.id).toBe(createResult);
  });
  it('findAll success', async () => {
    const createResult = await CredentialRepository.create(createData);
    const findAllResult = await CredentialRepository.findAll({
      q: {
        id: createResult,
      },
    });
    expect(findAllResult[0].id).toBe(createResult);
  });
  it('update success', async () => {
    const createdId = await CredentialRepository.create(createData);
    const expectedMstUserId = 4321;
    const updateResult = await CredentialRepository.update(
      {
        q: {
          id: createdId,
        },
      },
      {
        mst_user_id: expectedMstUserId,
      }
    );
    const findOneResult = await CredentialRepository.findOne({
      q: {
        id: createdId,
      },
    });
    expect(updateResult).toBe(1);
    expect(findOneResult?.mst_user_id).toBe(expectedMstUserId);
    expect(findOneResult?.updated_at).not.toBeNull();
  });
  it('destroy success', async () => {
    const createdId = await CredentialRepository.create(createData);
    const destroyResult = await CredentialRepository.destroy({
      q: {
        id: createdId,
      },
    });
    const findOneResult = await CredentialRepository.findOne({
      q: {
        id: createdId,
      },
    });
    expect(destroyResult).toBe(1);
    expect(findOneResult?.deleted_at).not.toBeNull();
  });
});
