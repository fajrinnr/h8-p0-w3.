function balikString(kata) {
    var balik = "";
    for (let i = kata.length - 1; i >= 0; i--) {
        balik += kata[i]
    }
    return balik
}

console.log(balikString("Hello world!"));