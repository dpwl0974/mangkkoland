import { defineRoom, defineServer, logger } from '@colyseus/core';
import { WebSocketTransport } from '@colyseus/ws-transport';
import { ParkRoom } from './rooms/ParkRoom';

const port = Number(process.env.PORT ?? 2567);

// 실시간 서버(Colyseus)와 REST API(Express)를 같은 포트에서 함께 띄운다.
const server = defineServer({
  greet: false,
  transport: new WebSocketTransport(),
  rooms: {
    park: defineRoom(ParkRoom),
  },
  express: (app) => {
    app.get('/health', (_req, res) => {
      res.json({ status: 'ok' });
    });
  },
});

await server.listen(port);
logger.info(`망꼬랜드 서버 실행 중 → http://localhost:${port}`);
