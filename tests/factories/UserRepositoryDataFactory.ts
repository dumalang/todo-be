import * as Factory from 'factory.ts';
import {IUserRepositoryData} from '../../src/repositories/UserRepository';
import {faker} from '@faker-js/faker';
export const UserRepositoryDataFactory =
  Factory.Sync.makeFactory<IUserRepositoryData>({
    name: faker.internet.displayName(),
    dob: faker.date.past().toDateString(),
  });
