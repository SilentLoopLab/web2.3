function myIsNaN(value) {
    return  value !== value;
}

const number = null;
console.log(myIsNaN(number));
