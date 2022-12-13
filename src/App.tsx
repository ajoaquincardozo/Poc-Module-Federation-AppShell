import { BrowserRouter } from "react-router-dom";
import { GlobalRoutes } from "./components/Routes";
import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <Header/>
        <div className="my-10">
          <GlobalRoutes />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
