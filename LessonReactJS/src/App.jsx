import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import UseStateApp from "./UseStateApp"
import UseParamsApp from "./UseParamsApp"

function App() {
    return (
        <BrowserRouter>
            {/* Navigation */}
            <nav>
                <Link to="/useState">useState</Link> | <Link to="/useParams/3">useParams</Link>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/useState" element={<UseStateApp />} />
                <Route path="/useParams/:id" element={<UseParamsApp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
