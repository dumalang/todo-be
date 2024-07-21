import {
  TodoRepository,
  ITodoRepositoryData,
} from '../../../src/repositories/TodoRepository';
import {TodoRepositoryDataFactory} from '../../factories/TodoRepositoryDataFactory';

const createData: ITodoRepositoryData = TodoRepositoryDataFactory.build();
describe('Todo Repository Crud Test', () => {
  beforeEach(async () => {
    await TodoRepository.create(createData);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('create success', async () => {
    const createResult = await TodoRepository.create(createData);
    expect(createResult).toEqual(expect.any(Number));
  });
  it('findOne success', async () => {
    const createResult = await TodoRepository.create(createData);
    const findOneResult = await TodoRepository.findOne({
      q: {
        id: createResult,
      },
    });
    expect(findOneResult?.id).toBe(createResult);
  });
  it('findAll success', async () => {
    const createResult = await TodoRepository.create(createData);
    const findAllResult = await TodoRepository.findAll({
      q: {
        id: createResult,
      },
    });
    expect(findAllResult[0].id).toBe(createResult);
  });
  it('update success', async () => {
    const createdId = await TodoRepository.create(createData);
    const expectedTodo = 'Edited Todo';
    const updateResult = await TodoRepository.update(
      {
        q: {
          id: createdId,
        },
      },
      {
        todo: expectedTodo,
      }
    );
    const findOneResult = await TodoRepository.findOne({
      q: {
        id: createdId,
      },
    });
    expect(updateResult).toBe(1);
    expect(findOneResult?.updated_at).not.toBeNull();
  });
  it('destroy success', async () => {
    const createdId = await TodoRepository.create(createData);
    const destroyResult = await TodoRepository.destroy({
      q: {
        id: createdId,
      },
    });
    const findOneResult = await TodoRepository.findOne({
      q: {
        id: createdId,
      },
    });
    expect(destroyResult).toBe(1);
    expect(findOneResult?.deleted_at).not.toBeNull();
  });
});
