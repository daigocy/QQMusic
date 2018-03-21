import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import NewSongList from './newsonglist/newsonglist';
import RecomendList from './recomendlist/recomendlist';

import './homepage.scss';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='homepage-navbar'>
                <NavLink activeClassName="on"  exact to="/">首页</NavLink>
                <NavLink activeClassName="on" to="/singer/">歌手</NavLink>
                <NavLink activeClassName="on" to="/album/">专辑</NavLink>
                <NavLink  to="/">排行榜</NavLink>
                <NavLink  to="/">分类歌单</NavLink>
                <NavLink  to="/">电台</NavLink>
                <NavLink  to="/">NV</NavLink>
                <NavLink  to="/">数字专辑</NavLink>
            </div>
        )
    }
}


class HomePage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
        <div className="home-page">
            <NavBar />
            <RecomendList />
            
            <NewSongList />
            <NewSongList />
        </div>
        )
        
    }
}

export default HomePage;