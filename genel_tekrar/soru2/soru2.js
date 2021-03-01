/*
    Klavyeden kenarları girilen bir üçgenin çeşidini veren uygulama yazının
*/

let kenar1 = parseInt(prompt("1. Kenar uzunluğu giriniz : ", "45"));
let kenar2 = parseInt(prompt("2. Kenar uzunluğu giriniz : ", "45"));
let kenar3 = parseInt(prompt("3. Kenar uzunluğu giriniz : ", "45"));


if ((kenar1==kenar2) && (kenar2==kenar3))
{
    console.log("Esitkenar ucgen");
}
else if ((kenar1 == kenar2) || (kenar1 == kenar3) || (kenar2 == kenar3))
{
    console.log("Ikizkenar ucgen");
}
else
{
    console.log("Cesitkenar ucgen");
}