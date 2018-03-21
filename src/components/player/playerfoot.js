import React, { Component } from 'react';

import ProgressBar from './progressbar';

import './playerfoot.scss';

class PlayerFoot extends Component {
    constructor(props) {
        super(props); // volume, isplay, current, progress, callback
        this.modes = ['single', 'list', 'order', 'random']
    }
    getTimeString(interval){
        let minute = Math.floor(interval/60);
        let second = interval - minute *60;
        let time = (minute<10?'0':'') + minute+":" + (second<10?'0':'')+second;
        return time;
    }
    
    render() {
        let {callbacks, currentSongItem, current, total, progress, mode,comments,
        isPlay, currentPercent, musicSrc, isPure, isMute, volume} = this.props;
        let {songSeek, playOrPause, nextSong, updateVolume} = callbacks
        let singers = currentSongItem.singer[0].name;
        if(currentSongItem.singer.length > 1) {
            for(let index=1;index<currentSongItem.singer.length;index++){
                singers+=" / "+currentSongItem.singer[index].name;
            }
        };
        let currentTime = this.getTimeString(current);
        let totalTime = this.getTimeString(total);
        let currentMode = this.modes[mode];
        let commentNums = ''
        if(comments && comments<999){
            commentNums = comments.toString;
        }else {
            commentNums = "999x"
        }
        let commentIcons = []
        for(let index=0;index<commentNums.length;index++) {
            commentIcons.push(
                <i className={"comment_number comment_number_"+commentNums[index]} key={index}></i>
            );
        }
        return (
            <div className="player-foot">
                <a href="javascript:;" className="btn btn_prev" title="alt+←"></a>
                <a href="javascript:;" className={`btn btn_${isPlay?'pause':'play'}`} title="alt+←"
                onClick={callbacks.playOrPause}></a>
                <a href="javascript:;" className="btn btn_next" title="alt+←"
                onClick={callbacks.nextSong} ></a>
                <div className="name-singer-time-progress" >
                    <div className="player_music__info" id="sim_song_info">
            	        <a >{currentSongItem.songname}</a> 
                        {" - "}
                        <a >{singers}</a>
                        <div className="player_music__time" id="time_show">{currentTime} / {totalTime} </div>
                    </div>
                    
                    <div className="player-progress-box">
                    <ProgressBar currentPercent={currentPercent} 
                                progress={progress} total={total}
                                valueCallback={songSeek} sync={false}
                    /> 
                    </div>    
                </div>
                <a className={`btn btn_mode ${currentMode}`}></a>
                <a className="btn btn_like like"></a>
                <a href={musicSrc} className="btn btn_download" 
                download={currentSongItem.songname+".m4a"}></a>
                <a className={`btn btn_comment ${commentNums?'have_comments':''}`}>
                    <span className="btn_comment_numbers">
                    {commentIcons}
                    </span>
                </a>
                <a className={`btn btn_ispure btn_${isPure?'pure':'nopure'}`} ></a>
                <div className="volume-box">
                    <a className={`btn btn_isMute btn_${isMute?'mute':'nomute'}`} ></a>
                    <div className="player-volume-box">
                    <ProgressBar currentPercent={volume*10} progress={0} total={10} sync={true}
                    valueCallback={updateVolume}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayerFoot;