import { server } from './app';
import { Server, IncomingMessage, ServerResponse } from 'http';

const listener: Server<typeof IncomingMessage, typeof ServerResponse> = server.listen(3002, () => {});

export const serverConnection: Promise<Server<typeof IncomingMessage, typeof ServerResponse>> = new Promise(async (resolve, reject) => {
  resolve(server.once('listening', () => listener));
  reject(server.on('error', (error: Error) => error));
});
