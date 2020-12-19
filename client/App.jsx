import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './containers/Login';
import SignupPage from './components/signup';
import RetrievalPage from './components/retrieval';

const App = () => {
  // const cat = 'cat';
  return (
    <div id="app" className="main-container">
      <Switch>
        {/* <Route path="/" exact component={HomePage} /> */}
        <Route path="/" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/resetPassword" exact component={RetrievalPage} />
      </Switch>
    </div>
  );
};

export default App;
