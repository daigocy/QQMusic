import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Header from './header/header';
import HomePage from './homepage/homepage';

import './app.scss'



class App extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/mymusic/" component={HomePage} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </div>
            </Router>
        )
    }
}
export default hot(module)(App);