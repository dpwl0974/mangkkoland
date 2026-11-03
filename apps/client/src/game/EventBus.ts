import Phaser from 'phaser';

/** Phaser 씬과 React UI가 서로 이벤트를 주고받는 통로 */
export const EventBus = new Phaser.Events.EventEmitter();
