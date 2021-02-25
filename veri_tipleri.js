//2 Tip veri türü vardır
//Primitive ve Referans Veri Türleri

// Primitive tipler : = Number, String, Boolean, Undefined, Null, Symboll
//Referans tipler  :  = Object

let sayi = 50;
console.log(sayi);
console.log(typeof sayi);

let ondalikSayi = 26.899;
console.log(ondalikSayi);
console.log(typeof ondalikSayi);

let negatifSayi = -25;
console.log(negatifSayi);
console.log(typeof negatifSayi);


let isim = "Ahmet";
let soyIsim = 'Emre';

//kacis karakteri
let cumle = 'Ahmet\'in Bilgisayarı';
let cumle2 = "Ahmet'in Bilgisayari";
console.log(cumle);

let tamIsim = isim + ' ' +  soyIsim;

//template literal - backtick
let tamIsim2 = '${isim} ${soyIsim}'
console.log("template literal : " + tamIsim);
console.log('template literal ile yazdır ${tamisim2}')


console.log(tamIsim);
console.log(isim);
console.log(typeof isim);



let asalSayiMi = true;
console.log("Veri türümüzün değeri " + asalSayiMi + " veri tipi:" + typeof asalSayiMi);
console.log('Veri türümüzün değeri ${asalSayiMi} veritipi : ${typeof asalSayiMi}');

let renk;
console.log(renk);
console.log(typeof renk);

let yas = null;
console.log("deger : " + yas + " veri tipi: " + typeof yas);
