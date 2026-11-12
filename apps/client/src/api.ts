export const SERVER_URL = import.meta.env.VITE_SERVER_URL ?? 'http://localhost:2567';

/** 서버가 살아 있는지 확인한다. 연결이 안 되면 false. */
export async function checkHealth(): Promise<boolean> {
  try {
    const res = await fetch(`${SERVER_URL}/health`);
    return res.ok;
  } catch {
    return false;
  }
}
