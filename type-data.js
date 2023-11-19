// ini buat cek type data, dengan perintah typeof
const umur = 20;
console.log("type data umur adalah:", typeof umur, umur);

let namaBuah = "Peapaya";
namaBuah = "Anggur";
console.log("type data nama buah",typeof namaBuah, namaBuah);

var bolean = true;
console.log("type data bolean", typeof bolean,bolean);

var object = {"nama":"wahyu","umur":20};
console.log("type data object adalah", typeof object, object);

var array = [{"nama":"wahyu","umur":20}];
console.log("type data array adalah", typeof array, array[0].nama);

var motor = {
    "merek":"yamaha",
    "akseries":{
        "spion":"kw",
        "ban":"tubles",
        "pedal":{
            "a":"bagus",
            "b":"jelek"
        },
        "mobil":{
            "toyota":"avanza",
            "daihatsu":"xenia"
        },
    },
    "binatang":["sapi","kuda","jerapah"]
};
console.log(motor.merek);
console.log(motor.akseries.spion);
console.log(motor.akseries.ban);
console.log(motor.akseries.pedal.a);
console.log(motor.akseries.mobil.toyota);
console.log(motor.binatang[2]);

var mobil =[
    {"a":"pajero","b":"xenia"},
    {"c":"cary","d":["mercedes"]},
    {"toyota":"avanza","daihatsu":"xenia"},
    {"suzuki":"cary","bmw":["mercedes"]}
];
console.log(mobil[0].a)
console.log(mobil[0].b)
console.log(mobil[1].c)
console.log(mobil[2].toyota)
console.log(mobil[3].bmw[0])
console.log(mobil[mobil.length-3])
for (var i = 0; i < mobil.length; i++) {
    console.log("cara looping 1",mobil[i])
}
mobil.forEach(function (item){
    console.log("cara looping 2",item)
})
