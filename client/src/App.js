import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./pages/Users";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";
import {Col, Row, Container} from "../src/components/Grid";


function App() {
  return (
    <Router>
     
      <Container>
        <Switch>
       
          <Route exact path="/" component={Landing}/>
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:id" component={Detail} />
          <Route component={NoMatch} />
          <Route exact path="/landing" component={Main} />
          <Route exact path="/home" component={Home}/>
        </Switch>
        <Footer/>
        </Container>
    </Router>
  );
}

export default App;
