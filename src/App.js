import React, { Component } from "react";

import "./App.css";
import "./index.css";
import Login from "./components/pages/login";
import Places from "./components/pages/places";
import DetailPlace from "./components/pages/detail_place";
import AccountList from "./components/pages/account_list";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "./components/pages/menu";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Places" component={Places} />
          <Route path="/DetailPlace" component={DetailPlace} />
          <Route path="/Menu" component={Menu} />
          <Route path="/AccountList" component={AccountList} />
          {/* Aqui llamo a la pantalla de inicio: <Inicio/> */}
          {/* Aqui llamo a la pantalla de orden: <PantallaOrden /> */}
        </Switch>
        {/* </div> */}
      </BrowserRouter>
    );
  }
}

export default App;
