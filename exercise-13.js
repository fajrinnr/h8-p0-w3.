function targetTerdekat(arr) {
    let o = arr.indexOf('o')
    let terdekat = arr.length

    if (arr.indexOf('x') === -1) {
        return 0
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            jarak = Math.abs(i - o)
            if (jarak < terdekat) {
                terdekat = jarak
            }
        }
    }
    return terdekat
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2