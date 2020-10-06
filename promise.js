penjumlahan = (a,b) => {
    return new Promise((resolve, rejected) => {
        if (typeof a == "number" && typeof b == "number") {
            let hasil = Number(a) + Number(b)
            resolve(hasil)
        } else {
            rejected(new Error(`Invalid parameter of penjumlahan`))
        }
    })
}

sqrt = (a) => {
    return new Promise((resolve, reject) => {
        if (typeof Math.sqrt(a) == "number") {
            resolve(Math.sqrt(a))
        }
        reject(new Error(`not squared number`))
    })
}

// console.log(`command 1`);
// console.log(`command 2`);
// penjumlahan(3,"lima")
// .then(res => console.log(`Hasil penjumlahan: ${res}`))
// .catch(err => console.log(err.message))
// console.log(`command 3`);

main = async() => {
    try {
        let hasil = await penjumlahan(30,20)
        console.log(`Hasil penjumlahan: ${hasil}`);
        let result = await penjumlahan(hasil, 50)
        console.log(`Hasil akhir: ${result}`);

        let s = await sqrt(90)
        console.log(`Hasil akar kuadrat: ${s}`);
    } catch (error) {
        console.log(error.message);
    }
}

main()


/**
 * case study
 * 1. buat promise utk menghitung usia berdasarkan parameter thn kelahiran,
 *  (akan error jika parameter thn diatas tahun saat ini), pastikan juga parameter bertipe numeric
 *  exp: countUsia(1990) -> 30
 *       countUsia(2030) -> error
 * 
 * 2. buat promise utk menghitung nilai faktorial dari parameter sebuah angka,
 *  pastikan nilai parameter bilangan bulat positif
 *  exp: faktorial(5) -> 120
 *       faktorial(-3) -> error
 *       faktorial(2.5) -> error
 * 
 */