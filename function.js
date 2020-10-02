// phones = [
//     { brand: "Oppa", size: "5 inch"},
//     { brand: "Xiomay", size: "4 inch"},
//     { brand: "SUSA", size: "6 inch"},
//     { brand: "Realyou", size: "7 inch"},
// ]

// phones.map(phone => {
//     console.log(`Brand Name: ${phone.brand}`);
//     console.log("Brand Name: " + phone.brand);
//     console.log(`Size: ${phone.size}`);
//     console.log("-------------------------------------");
// })


// class Lingkaran{
//     // ini adalah fungsi yg pertama kali dijalankan pada saat proses instance object
//     // atau pembuatan object baru
//     constructor(r){
//         this.r = r 
//     }

//     luas = () => {
//         return Math.PI * this.r * this.r
//     }

//     keliling = () => {
//         return Math.PI * 2 * this.r
//     }
// }

// let piring = new Lingkaran(10)
// console.log(`Luas Piring: ${piring.luas()}`);
// console.log(`Keliling Piring: ${piring.keliling()}`);


// makan = (nama_makanan, callback) => {
//     console.log(`Saya sedang memakan ${nama_makanan}`);
//     if(typeof callback == "function"){
//         callback()
//     }
// }

// tidur = () => {
//     console.log(`Saya sedang tidur`);
// }

// olahraga = (jenis_olahraga) => {
//     console.log(`Saya sedang olahraga ${jenis_olahraga}`);
// }

// makan("Soto Lodho Ayam", olahraga("Sepak Bola"))

masak = (menu, callback) => {
    console.log(`Saya sedang memasak ${menu}`);
    callback(menu)
}

makan = (nama_makanan) => {
    console.log(`Saya sedang memakan ${nama_makanan}`);
}

masak("Nasi Goreng", hasil => makan(hasil))