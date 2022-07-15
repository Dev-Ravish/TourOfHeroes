import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Heroes from './Heroes';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Details from './Details';
// import Heroes from './Heroes';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/Heroes">
              <Heroes/>
            </Route>
            <Route path="/Heroes/:id">
              <Details/>
            </Route>
          </Switch>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
