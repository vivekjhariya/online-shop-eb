import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import './bootstrap-overrides.scss'
import {HashRouter} from "react-router-dom";
import {ShoppingItemsProvider} from "./context/ShoppingItemsContext.jsx";
import {ShoppingCartProvider} from "./context/ShoppingCartContext.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HashRouter
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true
            }}
        >
            <ShoppingItemsProvider>
                <ShoppingCartProvider>
                    <App/>
                </ShoppingCartProvider>
            </ShoppingItemsProvider>
        </HashRouter>
    </StrictMode>,
)
