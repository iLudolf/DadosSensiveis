import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from '../pages/Home';
import Test from '../pages/Test';


import Production from '../pages/Production';
import Development from '../pages/Development';

function Routers() {
  return (
    <div>
      <Router>
        <Switch>
          <Route  exact path="/" component={Home} />      
          <Route  path="/production" component={Production} />
          <Route  path="/development" component={Development} />


          <Route  path="/test" component={Test} />              
          <Route path="*" component={Production} />         
        </Switch>
      </Router>
    </div>
  );
}

export default Routers;

