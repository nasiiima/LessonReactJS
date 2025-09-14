// array (o vettore) è un treno di elementi
// il primo indice inizia sempre con 0 (non 1!)
var array = [1, 2, 3]

// gli array methods eseguono delle operazioni comuni
// in questo modo non dobbiamo scriverle noi :)

// PUSH: aggiunge un elemento alla fine dell'array
array.push(4)
console.log("PUSH: " + array)

// UNSHIFT: aggiunge un elemento all'inizio dell'array
array.unshift(0)
console.log("UNSHIFT: " + array)

// POP: rimuove l'ultimo elemento dell'array
array.pop()
console.log("POP: " + array)

// SHIFT: rimuove il primo elemento dell'array
array.shift()
console.log("SHIFT: " + array)

// SLICE: copia un pezzo di un array e lo salva in un altro array
// slice(da indice, a indice <non incluso>)
var stringArray = ["Io", "sono", "un", "array", "di", "stringhe"]
var stringArrayCopy = stringArray.slice(1, 4)
console.log("SLICE (con indici): " + stringArrayCopy)

// se voglio copiare l'intero array...
stringArrayCopy = stringArray.slice()
console.log("SLICE: " + stringArrayCopy)

// ce ne sono molti altri. Dal link sotto c'è la spiegazione di ciascun metodo
// https://www.w3schools.com/js/js_array_methods.asp
