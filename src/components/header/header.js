import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import './header.scss'
import logo from './logo.png';

const isHomepage = (match, location) => {
    if (location.pathname.search(/mymusic/) !== -1){
        return false;
    }
    else{
        return true;
    }
}

class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="logo">
                    <img src={logo} />
                </div>
                
                <div className="header-nav">
                    <NavLink to='/'  isActive={isHomepage} exact
                    activeClassName="on">音乐馆</NavLink>
                    <NavLink to='/mymusic/' activeClassName="on">我的音乐</NavLink>
                    <a href="https://y.qq.com/download/index.html">客户端</a>
                    <NavLink to='/'>音乐号</NavLink>
                    <NavLink to='/'>VIP</NavLink>
                </div>
                <div className="userbox">登录</div>
	        </div>
        )
    }
}

export default Header;