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
    } catch (error) {
        console.log(error.message);
    }
}

main()