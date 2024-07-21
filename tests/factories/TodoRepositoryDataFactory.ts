import * as Factory from 'factory.ts';
import {
  ERepeatPeriod,
  ITodoRepositoryData,
} from '../../src/repositories/TodoRepository';
import {faker} from '@faker-js/faker';

export const TodoRepositoryDataFactory =
  Factory.Sync.makeFactory<ITodoRepositoryData>({
    todo: faker.word.adjective(),
    desc: faker.lorem.text(),
    day: faker.date.future().getDay(),
    month: 2,
    time_start_at: '',
    time_end_at: '',
    repeat: '',
    repeat_period: faker.helpers.enumValue(ERepeatPeriod),
  });
