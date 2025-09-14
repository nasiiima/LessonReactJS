import { useParams } from "react-router"

function UseParamsApp() {
    let params = useParams()
    return (
        <>
            <h1>useParams</h1>
            <p>L'ID della pagina è: {params.id}</p>
        </>
    )
}

export default UseParamsApp
