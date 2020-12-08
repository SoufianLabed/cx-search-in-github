import logo from './logo.svg';
import './App.css';
import UserGitHub from './Component/UserGithub'
import HomePage from './HomePage'

import { HashRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">

      <Router>
          
          <div className="">
            <Switch>
              
              <Route exact path="/"  component={HomePage} />
              <Route path="/users/:username" component={UserGitHub} />
            
            </Switch>
          </div>

      </Router>
  
      
    </div>
  );
}

export default App;
