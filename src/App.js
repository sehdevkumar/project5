import './App.css';
import Menu from './components/Menu'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="*">
            <center>
              <h3>404 Page Not Found!</h3>
            </center>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
