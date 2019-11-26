function tentukanDeretGeometri(arr) {
    var total = 0
    var totalArr = []
    for (let i = arr.length - 1; i > 0; i--) {
        if ( i < arr.length) {
            total = arr[i] / arr[i-1]
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
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false