import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./stores/index.jsx";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjhmNGU4ZTM1MDFiYWQ4MDZhZjZjZGE3MGMwMDcxYSIsIm5iZiI6MTcxOTI5MjI0OS4xNjMyMjgsInN1YiI6IjY1YTJkZTI2YmMyY2IzMDBiOTAxZTY2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wqefFVyAKsL19n3bO2LYgcPq17W7X9C2O7RixO4dRgA`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
