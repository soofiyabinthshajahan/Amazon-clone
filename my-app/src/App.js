import React from "react";
import Header from "./Head/Header";
import Home from "./Home/Home";
import { BrowserRouter as Router,Route } from "react-router-dom"
import { Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>

      </div>
    </Router >
  );
}

export default App;
