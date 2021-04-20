import './App.css';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Home/Login/Login';
import PrivateRoute from './components/Home/PrivateRoute/PrivateRoute';
import Admin from './components/Admin/Admin/Admin';
import User from './components/User/User/User';
import Footer from './components/Home/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import Navbars from './components/Home/Navbars/Navbars';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <div className="mb-2">
          <Navbars></Navbars>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/user">
            <User />
          </PrivateRoute>
        </Switch>
      </Router>
      <div className="mt-5">
        <Footer></Footer>
      </div>
    </UserContext.Provider>
  );
}

export default App;
