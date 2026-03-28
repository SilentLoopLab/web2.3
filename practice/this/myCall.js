Function.prototype.myCall = function (context, ...args) {
  context = context ?? globalThis;
  const fnKey = Symbol();
  context[fnKey] = this;
  const result = context[fnKey](...args);
  delete context[fnKey];
  return result;
};