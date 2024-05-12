import * as Factory from 'factory.ts';
import {
  ECredentialType,
  ICredentialRepositoryData,
} from '../../src/repositories/CredentialRepository';
import {faker} from '@faker-js/faker';
export const CredentialRepositoryDataFactory =
  Factory.Sync.makeFactory<ICredentialRepositoryData>({
    mst_user_id: Factory.each(i => i),
    type: faker.helpers.enumValue(ECredentialType),
    credential: faker.internet.email(),
    password: faker.internet.password(),
  });
