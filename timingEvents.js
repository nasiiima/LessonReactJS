// MAIN
console.log("Start")

// setTimeout(funzione, millisecondi)
// dopo aver aspettato tot millisecondi esegue la funzione data come parametro
setTimeout(printTimeout, 3000)

// setInterval(function, milliseconds)
// esegue la funzione ogni tot millisecondi all'infinito
var myInterval = setInterval(printInterval, 3000)

// DICHIARAZIONI
var intervalNumber = 0

function printInterval() {
    console.log("Interval " + intervalNumber)
    intervalNumber += 1

    // se intervalNumber è uguale a tre, ferma l'intervallo
    if (intervalNumber == 3) clearInterval(myInterval)
}

function printTimeout() {
    console.log("Timeout")
}

// tutti gli eventi di timeout si possono chiamare anche con l'oggetto window davanti (es: window.setTimeout(funzione, millisecondi))
// esiste clearTimeout, ma dal terminale è difficile farlo vedere. Dal link sotto lo si può provare
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_settimeout2
