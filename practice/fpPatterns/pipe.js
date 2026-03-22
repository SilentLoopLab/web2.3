function pipe(...funcs) {
    return function (v) {
        for (let i = 0; i < funcs.length; i++) {
            v = funcs[i](v);
        }
        return v;
    };
}

const add5 = (a) => a + 5;
const double = (a) => 2 * a;
const sub4 = (a) => a - 4;

const func = pipe(add5, add5, double, sub4); // 20
console.log(func(2));
