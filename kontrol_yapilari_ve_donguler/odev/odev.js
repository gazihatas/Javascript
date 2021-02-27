/*
Math.random() ile rastgele sayı üretebilirsiniz.
Bu fonksiyon 0 dahil -1 hariç bir değer üretir mesela 0.56 gibi.
Sonrasında bu ifadenin sonucunu istediğimiz aralığın üst sınırıyla 
çarparsanız verilen aralıkta değer üretmiş olursunuz.

Mesela 0 ile 10 arasında bir sayı içim (Math.random() * 10) +1 size 1 ile 10
arasında ki 10 da dahil sayı üretmiş olur.

Üretilen bu sayı ondalıklı olabilir bunu tam sayıya dönüştürmek için Math.floor()
kullanabilirsiniz.

Küçük bir piyango oyunu tasarlayınız. Sistem iki basamaklı bir sayı üretmeli.
kullanıcıdan da bu sayıyı tahmin etmesini istemelisiniz.

Eğer kullanıcı sayıyı tam olarak doğru bilirse 1000 TL;
Eğer kullanıcı sayının basamaklarını bilirse yani 65 yerine 56 yazmışsa 5000TL
Eğer kullanıcı şanslı numaranın sadece bir basamağını bilirse 1000Tl kazanır.


*/


let uretilenSayi = Math.floor((Math.random()* 99)+1);
console.log("Tahmin edilen sayi : " + uretilenSayi);


let girilenSayi = parseInt(prompt("İki basamaklı bir sayı tahmin edip giriniz","99"));
console.log("Kullanıcıdan Girilen sayı : " + girilenSayi);

let uretilenSayiBirlerBasamagi = uretilenSayi % 10;
console.log("Sayının Birler basamağı : " + uretilenSayiBirlerBasamagi);

let uretilenSayiOnlarBasamagi  = uretilenSayi / 10;
console.log("Sayının onlar basamağı : " + uretilenSayiOnlarBasamagi);

if(girilenSayi === uretilenSayi){
     console.log("Tebrikler Sayıyı tam olarak bildiniz 1000 TL kazandınız");
} else if(uretilenSayiBirlerBasamagi === uretilenSayiOnlarBasamagi && 
    uretilenSayiOnlarBasamagi === uretilenSayiBirlerBasamagi){
     console.log("Tebrikler Sayının basamaklarını bildiniz 5000 TL kazandınız");
} else if( uretilenSayiBirlerBasamagi === uretilenSayiBirlerBasamagi ||
    uretilenSayiOnlarBasamagi ===  uretilenSayiOnlarBasamagi){
    console.log("Tebrikler Sayının sadece bir asamağını bildiniz 1000 TL kazandınız");
}
 else {
    console.log("Malesef Tahmin edemediniz. kullanicinin girdiği sayı : " + girilenSayi );
}

