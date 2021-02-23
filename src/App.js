import './App.css';
import Home from '../src/screens/launch-page/HomePage/HomePage';
import Login from '../src/screens/launch-page/LoginPage/LoginPage';
import Register from '../src/screens/launch-page/RegisterPage/RegisterPage';
import Dashboard from '../src/screens/pro/DashdoardPage/DashboardPage';
import PointsOfSale from '../src/screens/pro/PointsOfSalePage/PointsOfSalePage';
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink  } from '@apollo/client';


const url = 'http://x2022bankid1596095846000.francecentral.cloudapp.azure.com/'

const httpLink = createHttpLink({ uri : url,  credentials: 'include'});

const client = new ApolloClient({
  link : httpLink, 
  cache : new InMemoryCache({
		addTypename: false
	}),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/points-of-sale" component={PointsOfSale} />
          </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
