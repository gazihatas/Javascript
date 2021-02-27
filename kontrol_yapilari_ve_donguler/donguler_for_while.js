//for döngüsü
//for(ilk atama ; dongu_calistirma_sarti ; her_calisma_sonrasi_ne_olacal)

for (let i = 0; i<20; i++){
    console.log("Benim adım x");
    console.log("selam!");
}

for(let i = 0, j = 0; (i +j) < 20;i=i+5, j=j+2) {
    console.log("Dongu calisti");
    console.log("i degeri: " + i + "j degeri : " +j);
}

//fordan sonra noktalı virgül olmaz
for(let i = 0; i<5; i++)
{
    console.log("Merhaba " +i);
}
//console.log("Merhab " +j);


//sonsuz dongu olusturulur
/*
for(; ;) {

}
*/

for(let j = 5; j < 15; j++){
    console.log("for dongüsü Merhaba");
}

let sayi = 5

while (sayi < 15) {
    console.log("Merhaba ");
    sayi++;
}

let yas = 20;
do {
    console.log("Do while merhaba");
    yas++;
} while(yas<30);

//break, continue, return
for(let i = 0; i < 50; i++) {
    if(i == 12) {
        break;
    }
    console.log("Break kullanımı");
}

for(let i = 10; i < 30; i++) {
    if(i == 15) {
        continue;
    }
    console.log("Continue kullanımı" + i);
}

// for içinde return kullanımı sadece fonksiyon içerisinde olur
//aksi taktirde illegal return statemen hatası alınır.

/*
for(let i = 0; i < 50; i++) {
    if(i == 12) {
        return;
    }
    console.log("Break kullanımı" + i);
}

*/





