import './App.css';
import Home from './screens/launch-page/HomePage/HomePage';
import Login from './screens/launch-page/LoginPage/LoginPage';
import Register from './screens/launch-page/RegisterPage/RegisterPage';
import Dashboard from './screens/pro/DashdoardPage/DashboardPage';
import PointsOfSale from './screens/pro/PointsOfSalePage/PointsOfSalePage';
import Profile from './screens/pro/ProfilePage/ProfilePage';
import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink  } from '@apollo/client';


const url = 'http://api.dev.cartt.fr/'

const httpLink = createHttpLink({ uri : url,  credentials: 'include'});

const client = new ApolloClient({
  link : httpLink, 
  cache : new InMemoryCache({
		addTypename: false
	}),
});

function App() {
  return (
	  	<Suspense fallback={true}>
      <ApolloProvider client={client}>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/points-of-sale" component={PointsOfSale} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
      </BrowserRouter>
    </ApolloProvider>
    </Suspense>
  );
}

export default App;
