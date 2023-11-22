// * - In operator hanya mengecek apakah property atau index ada atau tidak
//  * - Jadi walaupun property atau index nilainya null atau undefined maka return tetap true
 
const pengguna = {
    username: "John Doe",
    email: "johndoe@domain.com",
    profile: null
  };
  
  const hasEmail = "email" in pengguna;
  const hasPhone = "phone" in pengguna;
  const hasProfile = "profile" in pengguna;
  
  console.log(hasEmail); // true
  console.log(hasPhone); // false
  console.log(hasProfile); // true

const colors = ["red", "green", "blue"];

const firstIndexAvailable = 0 in colors;

console.log(colors)
console.log(firstIndexAvailable); // true

// * Nullish coalescing operator (??)
//  * Nullish coalescing operator hampir sama dengan logical OR (||).
//  * Perbedaannya dengan logical OR adalah:
//  * - Logical OR akan mengembalikan nilai right-hand jika left-hand bernilai falsy
//  * - Sedangkan Nullish coalescing operator akan mengembalikan nilai right-hand jika left-hand bernilai null atau undefined

const theme = null;
const color = theme ?? "dark";

console.log(color); // dark

// const user = null;
// const username = user ?? "admin";

// console.log(username); // ''

//  *Optional chaining operator adalah cara yang aman untuk mengambil nilai dari sebuah object 
//  tanpa menimbulkan error jika property tidak ditemukan.

const user = {
  name: "John Doe",
  address: {
    street: "Mawar"
  },
  contact : {
    phone : ""
  }
};

const street = user.address?.street;
const phone = user.contact?.phone;

// memanggil function dengan optional chaining
const getName = user.name?.getName?.();

console.log(street); // Mawar
console.log(phone); // undefined
console.log(getName); // undefined

const people = {
    nama : "saka",
    umur :"17"
}
console.log(people.nama?"wahyu":"sopyan")