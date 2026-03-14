function foo () {
    let count = 0;
    let b = 3;
    return function() {
        console.log(++count);
        eval(`console.log(b)`)
    }
}

let func1 = foo();
let func2 = foo();

func1();
func1();
func2();
func1();