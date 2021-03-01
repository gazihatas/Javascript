/*
    Klavyeden girilen 3 sayının ortalamasını yazınız.
*/

let girilenSayi1 = parseInt(prompt("Klavyeden birinci sayıyı giriniz","25"));
let girilenSayi2 = parseInt(prompt("Klavyeden ikinci sayıyı giriniz","25"));
let girilenSayi3 = parseInt(prompt("Klavyeden üçüncü sayıyı giriniz", "25"));

let ortalama = (girilenSayi1 + girilenSayi2 + girilenSayi3) / 3;

console.log("Girilen 1. sayı : " + girilenSayi1);
console.log("Girilen 2. sayı : " + girilenSayi2);
console.log("Girilen 2. sayı : " + girilenSayi3);
console.log("Girilen sayıların ortalaması : " + ortalama);