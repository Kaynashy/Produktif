let a = 11;
let b = 6;

let perkalian = a * b;
let pembagian = a / b;
let penjumlahan = a + b;
let pengurangan = a - b;
let modulus = a % b;

document.getElementById("hasil").innerHTML =
  "Perkalian : " + a + "*" + b + " = " + perkalian + " " +
  "Pembagian :" + a + "/" + b + "= " + pembagian + " " +
  "Penjumlahan :" + a + "+" + b + "=" + penjumlahan + " " +
  "Pengurangan:" + a + "-" + b + "= " + pengurangan + " " +
  "Modulus :" + a + "%" + b + "= " + modulus;
