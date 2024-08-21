import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import Prescriptions from './components/Prescriptions';
import Customers from './components/Customers';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/prescriptions" component={Prescriptions} />
            <Route path="/customers" component={Customers} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
