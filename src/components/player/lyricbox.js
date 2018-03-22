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
        let lyricScroll = this.refs.lyricscroll;
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

