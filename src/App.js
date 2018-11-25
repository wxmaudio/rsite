import React, { Component } from 'react';
import  {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './views/Home.js';
import Profile from './views/Profile.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/">首页</Link>
          <Link to="/profile">个人</Link>
         <Switch>
           <Route path="/" exact={true} component={Home}></Route>
           <Route path="/profile" exact={true} component={Profile}></Route>
         </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
