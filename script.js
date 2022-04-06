// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

const km = parseInt(prompt("Quanti km devi percorrere?"));
const age = parseInt(prompt("Quanti anni hai?"));
let price, finalPrice, discount = 0;
price = km * 0.21;

if(age < 18){
  discount = (price / 100) * 20;
  finalPrice = price - discount;
  document.getElementById("price-output").innerHTML = `Complimenti, hai diritto ad uno sconto del 20% (equivalente a ${discount.toFixed(2)}€) che è stato applicato al prezzo intero del tuo biglietto (${price.toFixed(2)}€). <br> Il prezzo finale del tuo biglietto è quindi ${finalPrice.toFixed(2)}€`;
} else if(age > 65){
  discount = (price / 100) * 40;
  finalPrice = price - discount;
  document.getElementById("price-output").innerHTML = `Complimenti, hai diritto ad uno sconto del 40% (equivalente a ${discount.toFixed(2)}€) che è stato applicato al prezzo intero del tuo biglietto (${price.toFixed(2)}€). <br> Il prezzo finale del tuo biglietto è quindi ${finalPrice.toFixed(2)}€`;
} else {
  finalPrice = price;
  document.getElementById("price-output").innerHTML = `Il prezzo finale del tuo biglietto è ${finalPrice.toFixed(2)}€`;
}
