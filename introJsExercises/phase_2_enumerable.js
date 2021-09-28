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


