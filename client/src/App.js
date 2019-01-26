import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./pages/Users";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Landing from "./pages/Landing";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:id" component={Detail} />
          <Route component={NoMatch} />
          <Route exact path="/landing" component={Landing}/>
          <Route exact path="/main" component={Main}/>
          <Route exact path="/home" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
