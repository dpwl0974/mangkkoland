import Phaser from 'phaser';
import { dogName } from '@mangkkoland/shared';
import { GAME_HEIGHT, GAME_WIDTH } from '../constants';
import { EventBus } from '../EventBus';
import { PIXEL_FONT } from '../fonts';

/** 산책 공원 씬. 지금은 바닥색과 타이틀만 그린다. */
export class ParkScene extends Phaser.Scene {
  constructor() {
    super('ParkScene');
  }

  create() {
    this.add.rectangle(0, 0, GAME_WIDTH, GAME_HEIGHT, 0x7cb342).setOrigin(0);

    this.add
      .text(GAME_WIDTH / 2, GAME_HEIGHT / 2 - 12, '망꼬랜드', {
        fontFamily: PIXEL_FONT,
        fontSize: '48px',
        fontStyle: 'bold',
        color: '#ffffff',
        stroke: '#33691e',
        strokeThickness: 8,
      })
      .setOrigin(0.5);

    this.add
      .text(GAME_WIDTH / 2, GAME_HEIGHT / 2 + 30, `${dogName(0)}이 산책 준비 중…`, {
        fontFamily: PIXEL_FONT,
        fontSize: '12px',
        color: '#f1f8e9',
      })
      .setOrigin(0.5);

    EventBus.emit('current-scene-ready', this);
  }
}
