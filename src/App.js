import './App.css';
import Home from '../src/HomePage/HomePage';
import Login from '../src/LoginPage/LoginPage';
import Register from '../src/RegisterPage/RegisterPage';
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
