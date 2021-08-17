import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext, useState } from 'react';
import Home from './Home/Home';
import Register from './Register/Register';
import Login from './Login/Login';
import BlockList from './BlockList/BlockList';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser ]}>
    <Router >
      <Switch>

      <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route exact path="/blockList">
          <BlockList/>
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
