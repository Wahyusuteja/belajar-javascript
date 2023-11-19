let Fruit = ["anggur","pepaya","pisang","jambu","mangga"];
console.log(Fruit[0]);
console.log(Fruit[1]);
console.log(Fruit[2]);
console.log(Fruit[3]);
console.log(Fruit[4]);

let siswa = [
{
 "perempuan": {
    "nama" : "putri",
    "umur" : "17",
    "nilai" : "90",
    },
},
{
    "pria" : {
    "nama" : "samsul",
    "umur" : "18",
    "nilai" : "80",
},
}
];

console.log(siswa[0].perempuan.nama)
console.log(siswa[0].perempuan.umur)
console.log(siswa[0].perempuan.nilai)
console.log(siswa[1].pria.nama);
for (var i = 0; i < siswa.length; i++) {
    console.log(siswa,{i})
}
console.log(siswa[siswa.length-3])
