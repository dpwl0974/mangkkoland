import { useEffect, useRef } from 'react';
import type Phaser from 'phaser';
import { loadFonts } from './game/fonts';
import { createGame } from './game/main';

/** Phaser 게임을 React 컴포넌트 안에 띄운다. HUD 같은 React UI는 이 컴포넌트 위에 얹는다. */
export function PhaserGame() {
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    let cancelled = false;

    loadFonts().then(() => {
      // StrictMode에서 effect가 두 번 실행돼도 게임은 하나만 만든다.
      if (cancelled || gameRef.current) return;
      gameRef.current = createGame('game-container');
    });

    return () => {
      cancelled = true;
      gameRef.current?.destroy(true);
      gameRef.current = null;
    };
  }, []);

  return <div id="game-container" />;
}
