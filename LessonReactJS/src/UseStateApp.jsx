import { useState } from "react"

function UseStateApp() {
    // count equivale a una normalissima variabile. Quindi contiene un valore che può essere un numero, una stringa, ...
    // setCount è una funzione che ci permette di aggiornare la variabile associata
    // useState serve per "settare" il valore di partenza
    const [count, setCount] = useState(0)
    const [buttonName, setButtonName] = useState("Non mi schiacciare")

    // funzione che ho scritto per aumentare count
    function handleCount() {
        setCount(count + 1)
    }

    function handleButtonName() {
        setButtonName("Mi hai schiacciato!")
    }

    // il return è ciò che vedremo nello schermo
    return (
        <>
            <h1>useState</h1>
            <button onClick={handleCount}>Mi hai schiacciato {count} volte</button>
            <button onClick={handleButtonName}>{buttonName}</button>
        </>
    )
}

export default UseStateApp
