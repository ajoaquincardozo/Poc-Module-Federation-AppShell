import { BrowserRouter } from "react-router-dom";
import { GlobalRoutes } from "./Components/Routes";
import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AuthProvider, { useAuth } from "./Components/AuthProvider";

const App = () => {
  const { auth } = useAuth();

  return (
    <BrowserRouter>
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        {auth && <Header/>}
        <div className="my-10">
          <GlobalRoutes />
        </div>
        {auth && <Footer/>}
      </div>
    </BrowserRouter>
  )
};

ReactDOM.render((
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
), document.getElementById("app"));
