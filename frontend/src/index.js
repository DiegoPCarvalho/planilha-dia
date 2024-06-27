import React from "react"
import ReactDOM from "react-dom/client"
import App from "./Main/App";
import { BrowserRouter } from "react-router-dom"
import { AppProvider } from "./data/context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <AppProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </AppProvider>
)

