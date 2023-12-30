export function toQueryString(objParams: Object) {
  const str = [];
  for (const p in objParams) {
    if (
      Object.prototype.hasOwnProperty.call(objParams, p) &&
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      objParams[p]
    ) {
      // @ts-ignore
      if (typeof objParams[p] === 'object' && objParams[p]?.length > 1) {
        // @ts-ignore
        objParams[p]?.map((item) => {
          str.push(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            decodeURIComponent(`${encodeURIComponent(p)}=${item}`),
          );
        });
      } else {
        str.push(
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          decodeURIComponent(
            // @ts-ignore
            `${encodeURIComponent(p)}=${encodeURIComponent(objParams[p])}`,
          ),
        );
      }
    }
  }

  return str.join('&');
}
