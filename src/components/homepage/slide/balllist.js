import React, {Component} from 'react';

import './balllist.scss';

class BallList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let balls = [];
        for(let i=1;i<=this.props.totalPages;i++){
            balls.push(
                <a href="javascript:;"
                    onClick={this.props.slidePageCallback.bind(null,i)} key={i}>
                    <i className={`ball-btn ${this.props.currentPage===i?'current':''}`}
                    ></i>
                </a>
            )
        };
        return(
            <div className="ball-list">
                {balls}
            </div>
        )
    }
}

export default BallList;