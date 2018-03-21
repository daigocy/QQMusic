import React, {Component} from 'react';

import CoverBox from '../../base/coverbox';

import './newsongitem.scss';

class NewSongItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="new-song-item">
                <div className="cover">
                <CoverBox item={this.props.item} />
                </div>
                <div className="item-info">
                    <p className="song">
                        <a>{this.props.item.alt}</a>
                    </p>
                    <p className="singer"> 
                        <a>{this.props.item.singer}</a>
                    </p>
                </div>
                <div className="time">
                    {this.props.item.time}
                </div>
            </div>
            
        )
    }
}

export default NewSongItem;