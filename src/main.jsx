import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Calculator } from "../src/Calculator";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Calculator/>
    </StrictMode>
)