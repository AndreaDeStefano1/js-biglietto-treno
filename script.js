// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

const km = 100;
const age = 17;
let price, finalPrice, discount = 0;
price = km * 0.21

if(age < 18){
  discount = (price / 100) * 20
  finalPrice = price - discount
} else if(age > 65){
  discount = (price / 100) * 40
  finalPrice = price - discount
} else {
  finalPrice = price
}
console.log(discount)
console.log(finalPrice)