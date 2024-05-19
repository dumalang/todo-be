import {
  UserRepository,
  IUserRepositoryData,
} from '../../../src/repositories/UserRepository';
import {UserRepositoryDataFactory} from '../../factories/UserRepositoryDataFactory';

const createData: IUserRepositoryData = UserRepositoryDataFactory.build();
describe('User Repository Crud Test', () => {
  beforeEach(async () => {
    await UserRepository.create(createData);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('create success', async () => {
    const createResult = await UserRepository.create(createData);
    expect(Array.isArray(createResult)).toBe(true);
  });
  it('findOne success', async () => {
    const createResult = await UserRepository.create(createData);
    const findOneResult = await UserRepository.findOne({
      q: {
        id: createResult[0],
      },
    });
    expect(findOneResult?.id).toBe(createResult[0]);
  });
  it('findAll success', async () => {
    const createResult = await UserRepository.create(createData);
    const findAllResult = await UserRepository.findAll({
      q: {
        id: createResult[0],
      },
    });
    expect(findAllResult[0].id).toBe(createResult[0]);
  });
  it('update success', async () => {
    const createResult = await UserRepository.create(createData);
    const createdId = createResult[0];
    const expectedName = 'Edited Name';
    const updateResult = await UserRepository.update(
      {
        q: {
          id: createdId,
        },
      },
      {
        name: expectedName,
      }
    );
    const findOneResult = await UserRepository.findOne({
      q: {
        id: createdId,
      },
    });
    expect(updateResult).toBe(1);
    expect(findOneResult?.name).toBe(expectedName);
    expect(findOneResult?.updated_at).not.toBeNull();
  });
  it('destroy success', async () => {
    const createResult = await UserRepository.create(createData);
    const createdId = createResult[0];
    const destroyResult = await UserRepository.destroy({
      q: {
        id: createdId,
      },
    });
    const findOneResult = await UserRepository.findOne({
      q: {
        id: createdId,
      },
    });
    expect(destroyResult).toBe(1);
    expect(findOneResult?.deleted_at).not.toBeNull();
  });
});