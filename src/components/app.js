import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import 'whatwg-fetch';
import 'babel-polyfill';
import fetchJsonp from 'fetch-jsonp';

import Header from './header/header';
import HomePage from './homepage/homepage';

import './app.scss'

const API_URL = "https://u.y.qq.com/cgi-bin/musicu.fcg?\
&g_tk=5381&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8\
&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0"

class App extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        let initData = {
            
        }
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