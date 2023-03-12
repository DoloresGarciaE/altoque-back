import { log } from '../src/utils/logger';

beforeAll(async () => {
  log.info('BeforeAll hook');
});

afterAll(async () => {
  log.info('AfterAll hook');
});
