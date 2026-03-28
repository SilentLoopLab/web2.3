Function.prototype.myBind = function (context, ...bindArgs) {
  const originalFn = this;
  function boundFn(...callArgs) {
    return originalFn.apply(context, [...bindArgs, ...callArgs]);
  }
  return boundFn;
};