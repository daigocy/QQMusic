import React, { Component } from 'react';

import './scrolllist.scss';

const splitLine = (<i className="player-list-splitline"></i>);

const PlayListItem = ({songItem, itemIndex, checked, iscurrent, isPlay, callbacks}) => {
    let singers = songItem.singer[0].name;
    if(songItem.singer.length > 1) {
        for(let index=1;index<songItem.singer.length;index++){
            singers+=" / "+songItem.singer[index].name;
        }
    };
    return (
        <div className="playlist-item">
            <div className={`scroll-icon item-check ${checked?'checked':''}`}>
                <input className="item-check-box"  type="checkbox" />
            </div>
            <div className="item-index">{itemIndex}</div>
            <div className="playlist-li name">
                <span>{songItem.songname}</span>
                <div className="inline-buttons">
                    <a onClick={callbacks.playCallback}><i className={`icon_list_menu icon-${iscurrent & isPlay?'stop':'play'}`}></i></a>
                </div>
            </div>
            <div className="playlist-li author">{singers}</div>
            <div className="playlist-li-time">00:00</div>
            {splitLine}
        </div>
    )
};

class ScrollList extends Component {
    constructor(props) {
        super(props);
        let scrollWindowHeight = window.innerHeight * 0.6
        this.state = {
            checkedIndexs: [],
            checkall:false,
            listHeight: 0,
            showScrollBar: false,
            scrollBarHeight: 0,
            scrollBarScrollTop: 0,
            scrollWindowHeight: scrollWindowHeight
        }
    }
    updateScrollBar() {
        let totalHeight = this.refs.scrollContainer.scrollHeight;
        let scrollWindowHeight = window.innerHeight * 0.6;
        if(totalHeight > scrollWindowHeight + 50) {
            let scrollBarHeight = (scrollWindowHeight/totalHeight) * scrollWindowHeight;
            this.setState({showScrollBar: true, 
            scrollBarHeight:scrollBarHeight, 
            scrollWindowHeight:window.innerHeight * 0.6})
        }else {
            this.setState({showScrollBar: false, scrollBarHeight:0, 
            scrollWindowHeight:window.innerHeight * 0.6})
        }
    }
    componentDidMount() {
        this.updateScrollBar();
        window.addEventListener('resize', (e)=> {
            this.updateScrollBar();
        });
    }
    componentWillUpdate() {

    }
    componentWillUnmount() {
        window.removeEventListener('resize');
    }
    
    handleScroll() {
        let scrollContainer = this.refs.scrollContainer;
        let scrollBarScrollTop = (scrollContainer.scrollTop/scrollContainer.scrollHeight)*this.state.scrollWindowHeight;
        //console.log(scrollContainer.scrollTop, scrollContainer.offsetHeight, scrollContainer.scrollHeight)
        this.setState({scrollBarScrollTop: scrollBarScrollTop});
    }
    moveScroll(e) {
        //e.stopPropagation();
        e.preventDefault();
        let offsetY = e.clientY - e.target.getBoundingClientRect().top;
        let fatherY = e.target.parentNode.getBoundingClientRect().top;
        let k = this.refs.scrollContainer.scrollHeight/this.state.scrollWindowHeight;
        let changeScrollTop = (e) => {
            let newScrollTop = (e.clientY - fatherY - offsetY) * k;
                this.refs.scrollContainer.scrollTop = newScrollTop;
        }
        window.onmousemove = changeScrollTop;
        window.onmouseup = ()=> {
            window.onmousemove = null;
            window.onmouse = null;
        }
    }
    toggleCheck(index) {
        //
    }

    render() {
        let items = this.props.songList.map((song, index) => {
            let checked = index in this.state.checkedIndexs;
            let iscurrent = index === this.props.currentSongIndex;
            let callbacks = {
                playCallback: this.props.callbacks.changeSong.bind(null, index)
            }
            if(iscurrent) {
                callbacks.playCallback = this.props.callbacks.playOrPause;
            }
            return(
                <PlayListItem songItem={song} itemIndex={index} checked={checked} 
                isPlay={this.props.isPlay} key={index} callbacks={callbacks} 
                iscurrent={iscurrent} />
            )
        })
        return (
            <div className="scroll-list-box">

                
                <div className="scroll-container" ref="scrollContainer"
                onScroll={this.handleScroll.bind(this)} style={{height: this.state.scrollWindowHeight+'px'}}>
                    <div className="scroll-header playlist-item">
                        {splitLine} 
                        <div className={`scroll-icon item-check ${this.state.checkall?'checked':''}`}>
                            <input className="item-check-box"  type="checkbox" />
                        </div>
                        <div className="playlist-li name">歌曲</div>
                        <div className="playlist-li author">歌手</div>
                        <div className="playlist-li-time">时长</div>
                        {splitLine}
                    </div>
                {items}  
                </div>
                <div className="scroll-bar-container" 
                style={{
                    height: this.state.scrollWindowHeight+'px',
                    display: this.state.showScrollBar?'block':'none'
                }}>
                    <div className="scroll-bar" onMouseDown={this.moveScroll.bind(this)} style={{
                        height: this.state.scrollBarHeight,
                        top: this.state.scrollBarScrollTop
                    }}></div>
                </div>
            </div>
            
        );
    }
}

export default ScrollList;
