/*
  Klavyeden girilen vize ve final notlarına göre öğrencinin dersi geçip geçmediğini söyleyen bir uygulama yapınız.
  (Geçme notu : 50)
  (Vize : %40)
  (Final : %60)
*/

let vize = parseInt(prompt("Vize notunuzu giriniz.","50"));
let final = parseInt(prompt("Final notunuzu giriniz : ","60"));
let ortalama = (vize * 0.4) + (final * 0.6);

if(ortalama >= 50)
{
  console.log("Dersten geçtiniz");
}
else if(ortalama<= 49)
{
  console.log("Dersten Kaldınız");
}
else {
    console.log("Geçerli bir not giriniz");
}