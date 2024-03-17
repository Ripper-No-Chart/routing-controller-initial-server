import 'reflect-metadata';
import 'module-alias/register';
import Container from 'typedi';
import cors from 'cors';
import http from 'http';
import morgan from 'morgan';
import express, { Application } from 'express';
import { Express } from 'express';
import { useExpressServer, useContainer as routingContainer } from 'routing-controllers';

const app: Express = express();

routingContainer(Container);

app.use(cors()) as Express;
app.use(express.json({ type: 'application/json' })) as Express;
app.use(express.urlencoded({ extended: true })) as Express;
app.use(morgan('dev')) as Express;

useExpressServer(app, {
  routePrefix: '1.0',
  defaultErrorHandler: false,
  controllers: [],
}) as Application;

export const server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse> = http.createServer(app);
