function fullname(namaDepan, namaBelakang) {
    console.log(namaDepan + " " + namaBelakang) //pake spasi
}
fullname("wahyu", "suteja")

function login(email, password) {
    const emailDb = "wahyusuteja@gmail.com"
    const passwordDb = "123456678"
    if (email === emailDb && password === passwordDb) {
        console.log("berhasil login")
    } else {
        console.log("gagal login")
    }
}
login("wahyusuteja@gmail.com", "123456678")
login("wahyusuteja@gmail.com", "12345668")

function totalPrice(hargaBarang, operator, kuantiti) {
    grandTotal = 0
    if (operator == "*") {
        grandTotal = hargaBarang * kuantiti
    } else if (operator == "+") {
        grandTotal = hargaBarang + kuantiti
    }
    return "Rp"+" " + grandTotal

}
function totalHargaShiping(price,operator,kuantiti){
    let totalPrice=0
    switch (operator) {
        case "-":
            totalPrice= price-kuantiti
            break;
            case "+":
            totalPrice= price+kuantiti
            break;
    
        default:
            break;
    }
    return totalPrice
}
const total = totalPrice(1000,"*",5)
console.log(total)
const jumlah = totalHargaShiping(1000,"+hgg",10)
console.log(jumlah)

function conversiUsdToIdr(usd,idr=15000) {
    return(usd*idr)
}
console.log(conversiUsdToIdr(5))

