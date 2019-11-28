function groupAnimals(animals) {
    var itung = 0
    var hasil = []
    animals.sort()
    for (let i = 0; i < animals.length; i++) {
        if (hasil.length === 0) {
            hasil.push([animals[i]])
        } else if (hasil[itung][0][0] === animals[i][0]) {
            hasil[itung].push(animals[i])
        } else {
            hasil.push([animals[i]])
            itung++
        }
    }
    return hasil
}





// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak', 'zebra', 'ular', 'rusa', 'kambing', 'semut']));