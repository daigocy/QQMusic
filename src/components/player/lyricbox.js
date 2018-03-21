import React, { Component } from 'react'

import './lyricbox.scss';

export default class LyricBox extends Component {
    constructor(props) {
        super(props);
        this.lastScroll = 0;
    }

    shouldComponentUpdate(nextProps) {
        if(nextProps.currentLine===this.props.currentLine) {
            return false;
        }else {
            return true;
        }
    }
    componentWillUpdate (nextProps) {
        //console.log('update');
        let lyricScroll = this.refs.lyricscroll;
        console.log(lyricScroll.getDOMNode());
        if(lyricScroll.scrollTo) {
            if(nextProps.currentLine === 0 | Date.now() > this.lastScroll + 5000) {
            lyricScroll.scrollTo(0, nextProps.currentLine*34>100?nextProps.currentLine*34-100:0);
            }
        }
    }
    setDelay() {
        this.lastScroll = Date.now();
    }

    render() {
        let {currentLine, lyricTexts } = this.props;
        // let lyricList = this.props.lyricData.split('\n');
        // let timeReg = /\[(\d{2}):(\d{2})\.(\d{2})\]/;
        // let lyricTexts = [];
        // let lyricTimePoint = [];
        // this.currentLine = 0;
        // for(let i=0;i<lyricList.length;i++) {
        //     let lyricItem = lyricList[i];
        //     let time = lyricItem.match(timeReg);
        //     let lyricText = lyricItem.replace(timeReg, '');
        //     if(time&&lyricText){
        //         let second = Number(time[1])*60 + Number(time[2]) + Number(time[3])/100;
        //         let line = lyricTimePoint.push(second) -1;
        //         if(second < this.props.current) {
        //             this.currentLine = line;
        //         }
        //         lyricTexts.push(lyricText);
        //     }
        // }
        return (
            <div className="lyric-content" ref="lyricscroll" onWheel={this.setDelay.bind(this)}>
                {
                    lyricTexts.map((lyricText, index)=> {
                        return <p className={`lyric-item ${index===currentLine?'on':''}`} key={index}>{lyricText}</p>
                    })
                }
            </div>
        )
    }
}

