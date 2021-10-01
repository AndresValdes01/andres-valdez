import React, { Fragment } from "react";
import RegisterPage from "./register/RegisterPage";
import LoginPage from "./login/LoginPage";
import Navbar from "./shared/components/header/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import UsuariosPage from "./users/UsuariosPage";
import ProductPage from "./products/ProductPage";
import SalesPages from "./sales/SalesPages";
import StatePages from "./states/StatePages";



function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/login" exact>
          <LoginPage></LoginPage>
        </Route>
        <Route path="/registro" exact>
          <RegisterPage></RegisterPage>
        </Route>
        <Route path="/usuarios" exact>
          <UsuariosPage></UsuariosPage>
        </Route>
        <Route path="/productos" exact>
          <ProductPage></ProductPage>
        </Route>
        <Route path="/gestionventas" exact>
          <SalesPages></SalesPages>
        </Route>
        <Route path="/estadoventas" exact>
          <StatePages></StatePages>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
