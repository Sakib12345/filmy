import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login/Login';
import Home from './components/Home/Home/Home';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Book from './components/Book/Book';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import BookingList from './components/BookingList/BookingList';
import Review from './components/Review/Review';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
        <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/bookNow/:id">
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/bookNow">
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/bookingList">
            <BookingList></BookingList>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;