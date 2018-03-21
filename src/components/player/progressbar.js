import React, { Component } from 'react';

import './progressbar.scss';

class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHold: false,
            currentPercent:this.props.currentPercent
        }
    }
    componentWillReceiveProps(nextProps) {
        if(!this.state.isHold){
            this.setState({currentPercent:nextProps.currentPercent});
        }
    }
    handleClick(e) {
        let progressBar = this.refs.progressBar;
        let newValue = (e.clientX - progressBar.getBoundingClientRect().left)/progressBar.clientWidth * this.props.total;
        console.log(newValue);
        this.props.valueCallback(newValue);
    }
    handleMove(e) {
        console.log("start move");
        e.stopPropagation();
        e.preventDefault();
        this.setState({isHold: true, currentPercent: this.props.currentPercent});
        window.onmousemove = (e) => {
            let progressBar = this.refs.progressBar;
            let currentPercent = (e.clientX - progressBar.getBoundingClientRect().left)/progressBar.clientWidth * 100;
            if(currentPercent>100) { currentPercent = 100 };
            if(currentPercent<0) { currentPercent = 0 };            
            this.setState({currentPercent: currentPercent});
            if(this.props.sync) {
                this.props.valueCallback(currentPercent*this.props.total/100);
            }
        }
        window.onmouseup = (e) => {
            //this.props.songSeek()
            e.stopPropagation();
            e.preventDefault();
            console.log(this.state.currentPercent*this.props.total/100);
            this.props.valueCallback(this.state.currentPercent*this.props.total/100);
            window.onmousemove = null;
            window.onmouseup = null;
            this.setState({isHold: false})
        }
    }

    render() {
        let progressPercent = Math.floor(this.props.progress*100/this.props.total);
        let currentPercent = this.state.currentPercent;
        // if(this.state.isHold) {
        //     currentPercent = this.state.currentPercent;
        // }else {
        //     currentPercent = this.props.currentPercent;
        // }
        return (
            <div className="progress-box" ref="progressBar" onClick={this.handleClick.bind(this)}>
            <div className="progressbar-box">
                <div className="progressbar-progress" style={{width: progressPercent+"%"}}></div>
                <div className="progressbar-current" style={{width: currentPercent+'%'}}> 
                <i className="btn progressbar-dot" id="spanprogress_op" onMouseDown={this.handleMove.bind(this)}></i>
                </div>
            </div>
            </div>
        );
    }
}

export default ProgressBar;
