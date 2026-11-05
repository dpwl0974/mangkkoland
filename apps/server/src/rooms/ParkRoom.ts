import { type Client, logger, Room } from '@colyseus/core';

/** 산책 공원 방. 같은 방에 들어온 사람끼리 서로 보인다. 지금은 입장·퇴장만 기록한다. */
export class ParkRoom extends Room {
  override maxClients = 50;

  override onCreate() {
    logger.info(`[park] 방 생성 ${this.roomId}`);
  }

  override onJoin(client: Client) {
    logger.info(`[park] 입장 ${client.sessionId}`);
  }

  override onLeave(client: Client) {
    logger.info(`[park] 퇴장 ${client.sessionId}`);
  }

  override onDispose() {
    logger.info(`[park] 방 종료 ${this.roomId}`);
  }
}
