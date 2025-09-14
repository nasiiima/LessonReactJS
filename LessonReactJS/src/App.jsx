import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import UseStateApp from "./UseStateApp"
import UseParamsApp from "./UseParamsApp"
import UseEffectApp from "./UseEffectApp"

function App() {
    return (
        <BrowserRouter>
            {/* Navigation */}
            <nav>
                <Link to="/useState">useState</Link> | <Link to="/useParams/3">useParams</Link> |{" "}
                <Link to="/useEffect">useEffect</Link>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/useState" element={<UseStateApp />} />
                <Route path="/useParams/:id" element={<UseParamsApp />} />
                <Route path="/useEffect" element={<UseEffectApp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
