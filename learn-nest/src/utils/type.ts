export function isFunction(o) {
  return typeof o === 'function';
}

export function isObject(o) {
  return (
    o &&
    typeof o === 'object' &&
    Object.prototype.toString.call(o) === '[object Object]'
  );
}

export function isArray(o) {
  return Array.isArray(o);
}

export function isPromise(p) {
  return isObject(p) && isFunction(p.then) && isFunction(p.catch);
}

export function isEmptyObject(o: any) {
  if (isArray(o)) {
    return !o.length;
  }

  if (isObject(o)) {
    return !Object.keys(o).length;
  }

  return true;
}
