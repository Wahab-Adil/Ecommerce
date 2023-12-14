import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import ThemeProvider from "./theme/index.js";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
