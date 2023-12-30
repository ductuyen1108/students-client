export function getUniqueArray(originArray: (string | number)[]) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return [...new Set(originArray)];
}
