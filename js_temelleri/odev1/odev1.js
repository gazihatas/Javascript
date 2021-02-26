/* Odev 1
Bir değişken oluşturun ve bu değişkende saniye değerini tutun.
Sonra bu saniye değerinin kaç dakika ve saniyeye denk geldiğini yazdırın.
Ornek 1200 değeri için 20 dakika 0 saniye yazmalıdır.
*/

let saniyeString = prompt("Saniye değerini giriniz","100");
let saniye = parseInt(saniyeString);


let dakika = parseInt((saniye / 60), 10);
let kalanSaniye = saniye % 60;

console.log(typeof saniye);
console.log(`Girdiğiniz ${saniye} değeri : ${dakika} dakika ve ${kalanSaniye} saniyedir`); 


