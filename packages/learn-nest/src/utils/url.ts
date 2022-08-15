export function getUrlParams(url: string) {
  const strs: string[] = url.split('?');
  if (strs.length <= 1) return {};
  const str = strs[1];
  const res: Record<string, string> = {};
  str.split('&').reduce((pre, cur) => {
    const [k, v] = cur.split('=');
    pre[k] = v;
    return pre;
  }, res);

  return res;
}
