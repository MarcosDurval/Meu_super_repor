// src/index.ts
import FrameController from './controllers/recordStrore.controller';
import Record from './interface/RecordStore';
import CustomRouter from './routes';
import App from './server';

const server = new App();

const frameController = new FrameController();

const recordRouter = new CustomRouter<Record>();
recordRouter.addRoute('/record', frameController);

server.addRouter(recordRouter.router);

server.startServer();