import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <App />
        <ToastContainer
          theme="dark"
          autoClose={3000}
<<<<<<< HEAD
          position="bottom-right"
=======
>>>>>>> dba6e1c556385e28dde3f9ee7bc456e5bceb5c15
          closeOnClick={true}
          pauseOnHover={false}
        />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
