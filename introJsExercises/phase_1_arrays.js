// call instances on array class(prototype)
Array.prototype.uniq = function() {
    // debugger
    let newArr = []

    for (let i = 0; i < this.length; i++) {
        let ele = this[i];
        if (!newArr.includes(ele)) {
            newArr.push(ele);
        }
    }
    return newArr;
}

// const testing = [1, 1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 7, 7] // new instance of a class

console.log([1,2,2,2,3].uniq())

