import React, {Component} from 'react';

import './coverbox.scss';

class CoverBox extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <a className="cover-box" href={this.props.item.href}>
                <img src={this.props.item.src} alt={this.props.item.alt} />
                <i className="mask"></i>
                <i className="play-btn"></i>
            </a>
        )
    }
}

export default CoverBox;