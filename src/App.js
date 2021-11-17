import './App.css';
import Home from '../src/screens/launch-page/HomePage/HomePage';
import Login from '../src/screens/launch-page/LoginPage/LoginPage';
import Register from '../src/screens/launch-page/RegisterPage/RegisterPage';
import ForgotPassword from '../src/screens/launch-page/ForgotPassword/ForgotPassword'
import Dashboard from '../src/screens/pro/DashdoardPage/DashboardPage';
import PointsOfSale from '../src/screens/pro/PointsOfSalePage/PointsOfSalePage';
import Profile from '../src/screens/pro/ProfilePage/ProfilePage';
import DashboardAdm from '../src/screens/admin/DashdoardPage/DashboardPage';
import PointsOfSaleAdm from '../src/screens/admin/PointsOfSalePage/PointsOfSalePage';
import ProfileAdm from '../src/screens/admin/ProfilePage/ProfilePage';
import UserAdm from '../src/screens/admin/UserPage/UserPage';

import React from "react";
import { createUploadLink } from 'apollo-upload-client'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink  } from '@apollo/client';
import WhiteMarkingPage from './screens/admin/WitheMarkingPage/WhiteMarkingPage';

export const apiUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_URL_PROD : process.env.REACT_APP_API_URL;
const httpLink = createUploadLink({ uri : apiUrl,  credentials: 'include'});

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
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/points-of-sale" component={PointsOfSale} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/adm/white-marking" component={WhiteMarkingPage} />
            {/* <Route exact path="/adm/dashboard" component={DashboardAdm} /> */}
            <Route exact path="/adm/points-of-sale" component={PointsOfSaleAdm} />
            <Route exact path="/adm/profile" component={ProfileAdm} />
            <Route exact path="/adm/users" component={UserAdm} />
          </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
