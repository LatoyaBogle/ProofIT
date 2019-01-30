import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";

import Users from "./pages/Users";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";
import {Col, Row, Container} from "../src/components/Grid";



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/users" component={Main} />
          <Route exact path="/users/id" component={Home} />
          <Route component={Home} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/home" component={Home}/>
        </Switch>
        </div>
    </Router>
  );
}

export default App;
