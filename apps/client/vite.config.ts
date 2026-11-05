import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // 포트가 이미 쓰이고 있으면 다른 포트로 바꿔 뜨지 말고 바로 알린다.
    strictPort: true,
  },
});
