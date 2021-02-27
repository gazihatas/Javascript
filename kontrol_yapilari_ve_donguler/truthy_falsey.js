//truthy falsey
//FALSE, 0, "", null, undefined, NaN FALSEY  diğer herşey truthy
let yas = 32;
yas = 0;

let isim = "emre";
isim = '';
isim = null;
isim = undefined;

let dogumYili = 1995;
dogumYili = "x";

if(dogumYili * 99) {
    console.log("Bu true ifadedir");
} else {
    console.log("Bu false ifadedir");
}