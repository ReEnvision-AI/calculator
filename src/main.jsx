import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Calculator } from "../src/Calculator";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className="absolute inset-0 pb-16 pt-safe overflow-hidden"
            style={{
                background: 'linear-gradient(to right bottom, #2D3436, #000428, #004E92, #000428, #2D3436)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}>
                <div className={`flex flex-col h-full bg-gray-800 rounded-lg shadow-xl border border-gray-700 ring-2 ring-blue-500/50`}>
                    <div className="flex-1 p-4 overflow-auto scroll-rubber-band">
                        <Calculator/>
                    </div>
                </div>
        </div>
    </StrictMode>
)