function pasanganTerbesar(num) {
    numString = String(num)
    var tampung = []
    var tampungNum = []
    for (let i = 0; i < numString.length - 1; i++) {
        if ( i !== numString.length - 1){
        tampung.push(numString[i] + numString[i+1])
        }
        tampungNum.push(parseInt(tampung[i]))
        var tampungNum = tampungNum.sort(function(a,b) {return a < b});
    }
    return tampungNum[0]
}
          
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99