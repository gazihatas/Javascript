let benimYasim = 31, onunYasi = 25;

if (benimYasim < onunYasi)
{
 console.log("Ben senden kucugum");
}
else if(benimYasim === onunYasi){
 console.log("Yasitiz");
}
else {
 console.log("Ben senden buyugum");
}

let ismim = "Gazi";
if  (ismim === "Gazi") {
    console.log("Mehaba Gazi");
    console.log("Nasılsın");
}

let sayi1 = 10, sayi2 = 20;
if (sayi1 > sayi2) {
    
    if(sayi1 > 20) 
    console.log("Sayisal hem sayi 2den hem de 20den buyuk");
}
  else {
      console.log("Else calistir")
  }

let asalSayiMi = true;
if(asalSayiMi == true){

}
if(asalSayiMi) {}

let a = 5, b = 15, c = 0;

if(a > b){
   c = a + b;
} else{
   c = a - b;
}
console.log("c değeri:"+ c);

//ternary kısa if operator
c= (a > b) ? (a +b) : (a - b);
console.log("c nin yeni değeri:"+ c);

