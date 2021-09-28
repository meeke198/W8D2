Array.prototype.myEach = function (callback) {

    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

Array.prototype.myMap = function (callback) {
    let newArr = []

    this.myEach(el => newArr.push(callback(el)));

    return newArr;
}

function test(num) {
    return num + 1
}

//this.myEach(el => newArr.push(test(el)));

console.log([1,2,3].myMap(test));

Array.prototype.myReduce = function (callback,[initialValue]) {
    if(initialValue)
    let sum = 0;
    this.myEach(el => sum += callback(ele));
    return sum;
}
function test(acc, el) {
    acc + el
}

console.log([1, 2, 3].myReduce(test, 9))