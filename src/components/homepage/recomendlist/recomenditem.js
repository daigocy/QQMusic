import React, { Component } from 'react'

import CoverBox from '../../base/coverbox';

import './recomenditem.scss';

export default class RecomendItem extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="recomend-item">
                <div className="content">
                    <div className="cover">
                        <div className="coverbox">
                        <CoverBox item={this.props.item} />
                        </div>
                    </div>
                    <p className="item-title">
                        <a href={this.props.item.href}>{this.props.item.alt}</a>
                    </p>
                    <p className="item-listen_num"> 
                        <a>{this.props.item.listen_num}</a>
                    </p>
                </div>    
            </div>
        )
    }
}




