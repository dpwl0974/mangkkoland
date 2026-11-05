import galmuri11 from 'galmuri/dist/Galmuri11.woff2?url';
import galmuri11Bold from 'galmuri/dist/Galmuri11-Bold.woff2?url';

/** 픽셀 폰트. 12px의 정수배 크기로 써야 글자가 또렷하다. */
export const PIXEL_FONT = 'Galmuri11';

/** 캔버스는 폰트가 다 받아진 뒤에 그려야 하므로 게임 시작 전에 미리 불러온다. */
export async function loadFonts(): Promise<void> {
  const faces = [
    new FontFace(PIXEL_FONT, `url(${galmuri11})`, { weight: '400' }),
    new FontFace(PIXEL_FONT, `url(${galmuri11Bold})`, { weight: '700' }),
  ];
  await Promise.all(faces.map((face) => face.load()));
  faces.forEach((face) => document.fonts.add(face));
}
