import { StrictMode } from "react";
// import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import { store } from "./store/index.js";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </StrictMode>
);
