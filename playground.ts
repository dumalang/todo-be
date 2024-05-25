import {CredentialRepository} from './src/repositories/CredentialRepository';
import {logger} from './src/utils/log_util';
import {v4 as uuid} from 'uuid';

const main = () => {
  const asy = async () => {
    playground().then(() => {
      logger.info('playground() done');
    });
  };
  asy().then(() => {
    logger.info('asy() done');
  });
};

const playground = async () => {
  logger.info('playground running');

  for (let i = 1; i <= 10; i++) {
    const create = await CredentialRepository.create({
      uuid: uuid(),
      mst_user_id: 12345,
    });

    logger.info(create);
  }
};

main();
