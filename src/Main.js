import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomaPage/HomePage";
import ListadoContainer from "./components/Listado/ListadoContainer";
import NotFound from "./components/TODO/Todo";
function Main() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route path="/listado" component={ListadoContainer} />

          <Route path="/notfound" component={NotFound} />

          {/* Rutas externas */}
          <Route
            path="/twitter"
            component={() => {
              window.location.href = "https://twitter.com/Wolox";
              return null;
            }}
          />
          <Route
            path="/wolox"
            component={() => {
              window.location.href = "https://www.wolox.com.ar/";
              return null;
            }}
          />
          {/* {token ? null : <Redirect from="/" to="/" />} */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Main;
