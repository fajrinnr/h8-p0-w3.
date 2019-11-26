function dataHandling2(masukan) {
    // splice untuk memodifikasi variabel //
    masukan.splice(1,1, masukan[1] + " Elsharawy")
    masukan.splice(2,1, "Provinsi " + masukan[2])
    masukan.splice(4,1, "Pria", "SMA Internasional Metro")
    console.log(masukan)

    // switch case untuk menuliskan nama bulan // 
    var pisah = masukan[3].split("/")
    var bulanString = ''
    switch (pisah[1]) {
        case '01' :
        bulanString = 'Januari'
        break
        case '02' :
        bulanString = 'Februari'
        break
        case '03' :
        bulanString = 'Maret'
        break
        case '04' :
        bulanString = 'April'
        break
        case '05' :
        bulanString = 'Mei'
        break
        case '06' :
        bulanString = 'Juni'
        break
        case '07' :
        bulanString = 'Juli'
        break
        case '08' :
        bulanString = 'Agustus'
        break
        case '09' :
        bulanString = 'September'
        break
        case '10' :
        bulanString = 'Oktober'
        break
        case '11' :
        bulanString = 'November'
        break
        case '12' :
        bulanString = 'Desember'
        break
    }
    console.log(bulanString)

    // sorting secara descending //
    tanggal = parseInt(pisah[0])
    bulan = parseInt(pisah[1])
    tahun = parseInt(pisah[2])
    date = [tanggal, bulan, tahun] 
    dateSort = date.sort(function compareNumbers(a, b) { return a < b })
    dateSort[0] = '' + dateSort[0]
    dateSort[1] = '' + dateSort[1]
    dateSort[2] = '' + dateSort[2]
    for (let i = 0; i < dateSort.length; i++) {
        if (dateSort[i].length == 1) {
        dateSort[i] = '0' + dateSort[i];
        }    
    }
    console.log(dateSort)

    // gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) // 
    console.log(pisah.join('-'));

    // Nama harus dibatasi sebanyak 15 karakter saja. //
    console.log(masukan[1].slice(0,15))
}
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

dataHandling2(input)