/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** 게임 서버 주소. 없으면 로컬 서버(http://localhost:2567)를 쓴다. */
  readonly VITE_SERVER_URL?: string;
}
