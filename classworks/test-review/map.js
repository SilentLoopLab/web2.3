Array.prototype.map = function (cb, thisArgs){
    let newArray = new Array();
    for (let i = 0; i < this.length; ++i) {
        newArray.push(cb.call(thisArgs, this[i], i, this));
    }
    return newArray;
}
