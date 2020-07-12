import React from "react";
import "./App.css";
import Nav from "./components/nav";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Article from "./components/Article";
import Category from "./components/itemDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path={"/category/:id"}
            render={(props) => (
              <Category key={props.match.params.id} {...props} />
            )}
          />
          <Route
              path={"/article/:searchURL"}
              render={(props) => (
                  <Article key={props.match.params.searchURL} {...props} />
              )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
