import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponents/sikandar';
import Mymessege from './MyComponents/Messsage';
import NameComponent from './MyComponents/NameComponent';
import ConditionalComponent from './MyComponents/ConditionalComponent';
import ArrowFunction from './MyComponents/ArrowFunction';
import Login from './MyComponents/Login';
import ParentComponent from './MyComponents/FruitList';
import Toggle from './MyComponents/Toggle';
import TodoList from './MyComponents/ToDoList';
import Counter from './MyComponents/counter';
import ValidatedForm from './MyComponents/FormValidation';
import FirstName from './MyComponents/lab exam/Firstname';
import MiddleName from './MyComponents/lab exam/Middlename';
import LastName from './MyComponents/lab exam/Lastname';
import NotFound from './MyComponents/lab exam/Notfound';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function App() {
  return (
      <Router>
          <div>
              <nav>
                  <ul>
                      <li><Link to="/sikandar">sikandar</Link></li>
                      <li><Link to="/khan">khan</Link></li>
                      <li><Link to="/afridi">afridi</Link></li>
                  </ul>
              </nav>
              <Switch>
                  <Route path="/sikandar" component={FirstName} />
                  <Route path="/khan" component={MiddleName} />
                  <Route path="/afridi" component={LastName} />
                  <Route component={NotFound} />
              </Switch>
          </div>
      </Router>
  );
}

export default App;