luasLingkaran = (r, callback) => {
    let luas = Math.PI * r * r 
    let keliling = Math.PI * r * 2
    console.log(`Luas Lingkaran: ${luas}`);
    console.log(`Keliling Lingkaran: ${keliling}`);
    callback(luas,keliling)
}

volumeTabung = (l, k, t) => {
    let volume = l * t
    let lp = (k * t) + (2 * l)
    console.log(`Volume Tabung: ${volume}`);
    console.log(`Luas Tabung: ${lp}`);
}


luasLingkaran(10, (ls,kl) => volumeTabung(ls,kl,10))

