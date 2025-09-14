import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import UseStateApp from "./UseStateApp.jsx"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <UseStateApp />
    </StrictMode>
)
