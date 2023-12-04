import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Greeting} />
        {/* Other routes can be added here */}
      </Switch>
    </Router>
  );
}

export default App;
