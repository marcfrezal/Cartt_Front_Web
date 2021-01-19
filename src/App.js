import './App.css';
import Home from '../src/HomePage/HomePage';
import Login from '../src/LoginPage/LoginPage';
import Register from '../src/RegisterPage/RegisterPage';
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
