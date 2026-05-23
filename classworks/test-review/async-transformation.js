function foo() {
  return Promise.resolve(5)
    .then(a => {
      return Promise.resolve(4).then(b => {
        return a + b;
      });
    })
    .catch(err => {
      console.error(err.message);
    })
    .finally(() => {
      return;
    });
}        

async function myFoo() {
    try {
        var a = await 5;
        var b = await 4;
        return a + b;
    } catch(err) {
        console.error(err.message);
    } finally {
        return;
    }
}