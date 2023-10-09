import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import App from "./App";
import "./globals.css";
import { register } from 'swiper/element/bundle';
register()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);