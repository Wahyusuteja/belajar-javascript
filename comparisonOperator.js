// /* eslint eqeqeq: "off"*/
// /**
//  * Kode di bawah ini beberapa diberi komentar karena
//  * alasan code quality. Matikan komentar pada baris
//  * 14, 15, 19, dan 20 untuk melihat hasil keluarannya.
//  *
//  * Misal kita akan membandingkan sebuah angka
//  * Contoh:
//  */

// const x = 10;

// // Menyamakan
// // console.log(x == 10); // true
// // console.log(x == 1); // false, karena x itu 10
// console.log(x === 10); // true

// // Membedakan
// // console.log(x != 5); // true
// // console.log(x != 10); // false, karena x itu 10
// console.log(x !== 12); // true
// console.log(x !== 10); // false, karena x itu 10

// // Membandingkan
// console.log(x > 5); // true
// console.log(x > 7); // true
// console.log(x > 9.999); // true
// console.log(2 < x); // true
// console.log(5 < x); // true
// console.log(x < 9.999); // false, karena x tidak lebih kecil dari 9.999
// console.log(x >= 8); // true
// console.log(x >= 10); // true
// console.log(x <= 10); // true
// console.log(x <= 8); // false

const nilai = 70
let keterangan = "";
if(nilai >= 100){
    keterangan = "lulus"
}
else if(nilai >= 50){
    keterangan = "cukup"
}
else{
    keterangan = "tidak lulus"
}
console.log(keterangan)

const isLogin = false
if(isLogin){
console.log("berhasil masuk")
}
else{
    console.log("gagal login")
}

