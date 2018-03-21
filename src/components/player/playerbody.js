import React, { Component } from 'react'


import ScrollList from './scrolllist';
import PlayerFoot from './playerfoot';
import LyricBox from './lyricbox';

import playerLogo from './player_logo.png';
import './playerbody.scss';

const homePageUrl = "http://127.0.0.1:3000";

export default class PlayerBody extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let imageId = this.props.songList[this.props.currentSongIndex].albummid;
        let backgroundImageUrl = `https://y.gtimg.cn/music/photo_new/T002R300x300M000${imageId}.jpg?max_age=2592000`;
        let currentSongItem = this.props.songList[this.props.currentSongIndex];
        let {isPure, songList, currentSongIndex, isPlay, callbacks, lyricList, volume,
        current, currentPercent, progress, total, mode, musicSrc, comments, isMute,
        lyricTexts, lyricTimePoint, currentLine} = this.props;
        return (
            <div className="player-body">
                <div className="player-body-logo">
                    <a href={homePageUrl}>
                    <img src={playerLogo} />
                    </a>
                </div>
                <div className="player-content">
                    <div className="player-content-body">
                        <div className="song-scroll" style={{display: `${isPure?'none':'block'}`}}>
                            <div className="song-scroll-control"> 
                                    <a href="javascript:;" ><i className="icon_like"></i>收藏</a>
                                    <a href="javascript:;" ><i className="icon_add"></i>添加到</a>
                                    <a href="javascript:;" ><i className="icon_download"></i>下载</a>
                                    <a href="javascript:;" ><i className="icon_delete"></i>删除</a>
                                    <a href="javascript:;" ><i className="icon_clear"></i>清空列表</a>
                            </div>
                            <ScrollList songList={songList} currentSongIndex={currentSongIndex}
                            isPlay={isPlay}
                            callbacks={{
                                playOrPause: callbacks.playOrPause,
                                changeSong: callbacks.changeSong
                            }}
                            />

                        </div>

                        <div className="cover-lrc-box">
                            <a className={`cover-image a-rotation ${isPlay?'':'a-pause'}`}><img src={backgroundImageUrl}/></a>
                            <div className="song-lyric">
                            <LyricBox lyricTexts={lyricTexts}  lyricTimePoint={lyricTimePoint} currentLine={currentLine}/>
                            </div>
                            
                        </div>
                    </div>
                    
                    <PlayerFoot  volume={volume} currentSongItem={currentSongItem} isPure={isPure}
                    isPlay={isPlay} current={current} currentPercent={currentPercent}
                    progress={progress} total={total} mode={mode}
                    musicSrc={musicSrc} comments={comments} isMute={isMute}
                    callbacks={{
                        playOrPause: callbacks.playOrPause,
                        nextSong: callbacks.nextSong,
                        songSeek: callbacks.songSeek,
                        updateVolume: callbacks.updateVolume
                    }}
                    />
                </div>
                <div className="player-mask">
                </div>
                <div className="player-background" 
                style={{backgroundImage: `url(${backgroundImageUrl})`}}>
                </div>
            </div>
        )
    }
}
