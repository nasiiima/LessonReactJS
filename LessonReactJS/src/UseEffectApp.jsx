// esempio da https://www.w3schools.com/react/react_useeffect.asp
// in poche parole serve per prendere dati dall'esterno, aggiornare il DOM e per usare i timer
function UseEffectApp() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000)
    })

    return <h1>I've rendered {count} times!</h1>
}

export default UseEffectApp
