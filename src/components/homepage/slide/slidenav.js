import React, {Component} from 'react';

import './slidenav.scss';

class SlideNav extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        let typenav = this.props.types.map((type,index)=>{
            return(
                <a href="javascript:;"  key={index}
                className={`nav-tab ${type.id === this.props.currentTypeId?'current':''}`}
                onClick={this.props.changeTabCallback.bind(null, type.id)}
                >{type.title}</a>
            )
        });
        return(
            <div className="slide-nav">
                {typenav}
            </div>
        )
    }
}

export default SlideNav;