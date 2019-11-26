function tentukanDeretAritmatika(arr) {
    var total = 0
    var totalArr = []
    for (let i = arr.length - 1; i > 0; i--) {
        if ( i < arr.length) {
            total = arr[i] - arr[i-1]
            totalArr.push(total)
        }
    }
    for (let i = 0; i < totalArr.length - 1; i++) {
        if (totalArr[i] === totalArr[i+1]) {
            return true
        } else {
            return false
        }
    }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
