import Phaser from 'phaser';
import { GAME_HEIGHT, GAME_WIDTH } from './constants';
import { ParkScene } from './scenes/ParkScene';

export function createGame(parent: string): Phaser.Game {
  const game = new Phaser.Game({
    type: Phaser.AUTO,
    parent,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    backgroundColor: '#1b1f16',
    // 픽셀아트가 뭉개지지 않게 확대할 때 보간하지 않는다.
    pixelArt: true,
    scale: {
      // 2배, 3배처럼 정수배로만 확대해야 픽셀 크기가 고르게 유지된다.
      mode: Phaser.Scale.NONE,
      zoom: Phaser.Scale.MAX_ZOOM,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [ParkScene],
  });

  const fitZoom = () => game.scale.setZoom(game.scale.getMaxZoom());
  window.addEventListener('resize', fitZoom);
  game.events.once(Phaser.Core.Events.DESTROY, () => window.removeEventListener('resize', fitZoom));

  return game;
}
