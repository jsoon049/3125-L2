import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Customer } from "./components/Customer";
import { Product } from "./components/Product";
import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer";
import "./App.css";
import { GlobalProvider } from "./components/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/3125-L2/">
            <Customer />
          </Route>
          <Route path="/3125-L2/product">
            <Product />
          </Route>
          <Route path="/3125-L2/cart">
            <Cart />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </GlobalProvider>
  );
}

export default App;
