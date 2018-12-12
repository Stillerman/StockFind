import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home'
import Stock from './Stock'
import Counter from './Counter'
import { Provider } from "react-redux";
import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/count" component={Counter} />
          <Route path="/stock" component={Stock} />
          {/*
             It's possible to use regular expressions to control what param values should be matched.
                * "/order/asc"  - matched
                * "/order/desc" - matched
                * "/order/foo"  - not matched
          */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
