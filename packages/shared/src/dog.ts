export const DOG_NAME_PREFIX = '윤망꼬';

/** 분양 번호로 표시 이름을 만든다. 예) 1234 → 윤망꼬1234 */
export function dogName(number: number): string {
  return `${DOG_NAME_PREFIX}${number}`;
}
