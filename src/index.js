import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthProvider from "./Context/AuthContext";
import registerServiceWorker from './registerServiceWorker';
import {T, initLang} from "./translation";

async function render() {

    await initLang();
    console.log(T("test", {val: 5}))

    ReactDOM.render(
        <React.StrictMode>
            <AuthProvider>
                <App />
            </AuthProvider>
        </React.StrictMode>,
        document.getElementById("root")
    );
}
registerServiceWorker();

render();