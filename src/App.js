import "./App.css";
import Header from "./components/pages/Header";
import { Fragment } from "react";

import AppRoutes from "./components/AppRoutes";

import ProductPage from "./components/pages/ProductPage";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Header />
        <AppRoutes />
        <ProductPage />
      </div>
    </Fragment>
  );
}

export default App;
