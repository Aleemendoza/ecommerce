import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
import NavBar from "./components/navbar/NavBar";
import SearchBar from "./components/searchBar/SearchBar";
import Catalog from "./components/details/Catalog";
import Categories from "./components/details/categories";
import Crud from "./components/crud/Crud";
import Carrito from "./components/details/Carrito";
import Register from "./components/forms/createForm";
import Login from "./components/forms/loginForm";
import ProductDetails from "./components/product/ProductDetails";
import Users from "./components/user/users";
import Reviews from "./components/review/Reviews";
import Administrador from "./components/admin/Administrador";
import Ordenes from "./components/admin/Ordenes";
import "./App.css";
import OrdenIndividual from "./components/admin/OrdenIndividual";
import Envio from "./components/details/Envio";
import Gracias from "./components/details/Gracias";
import Slide from "./components/product/Slide";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" component={NavBar} />
          <Route exact path="/catalogue" component={Slide} />
          <Route exact path="/admin/categorias" component={Categories} />
          <Route path="/catalogue" component={SearchBar} />
          <Route exact path="/catalogue" component={Catalog} />
          <Route exact path="/admin/productos" component={Crud} />
          <Route exact path="/registro" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin/usuarios" component={Users} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/admin" component={Administrador} />
          <Route exact path="/catalog/:id" component={ProductDetails} />
          <Route exact path="/carrito" component={Carrito} />
          <Route exact path="/admin/ordenes" component={Ordenes} />
          <Route exact path="/admin/ordenes/:id" component={OrdenIndividual} />
          <Route exact path="/carrito/envio" component={Envio} />
          <Route exact path="/carrito/envio/gracias" component={Gracias} />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
