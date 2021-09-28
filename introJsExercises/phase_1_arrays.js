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

Array.prototype.twoSum = function() {
    let newArr = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            let curEle = this[i];
            let nextEle = this[j];
            if (curEle + nextEle === 0) {
                newArr.push([i, j]);
            }
        }
    }
    return newArr;
}

console.log([1, 3, 4, -5, 9, -4, 10, 5].twoSum())

Array.prototype.transpose = function () {
    let newArr = [];

    for (let i = 0; i < this[0].length; i++) {
        let sub = []
        for (let j = 0; j < this.length; j++) { 
           sub.push(this[j][i]);  
        }
        newArr.push(sub)
    }
    return newArr;
}

console.log([[1, 3, 4], [7, 8, 9]].transpose())