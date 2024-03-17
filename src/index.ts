import chalk from 'chalk';
import { serverConnection } from './server';
import { Server, IncomingMessage, ServerResponse } from 'http';

(serverConnection
  .then(() => {
    console.info(`Listening. Port: ${chalk.blueBright(3002)} | Status: ${chalk.green('✔')}`);
  })
  .catch((err: Error) => {
    console.error(err);
  }) as unknown as Promise<Server<typeof IncomingMessage, typeof ServerResponse>>) || Error;
