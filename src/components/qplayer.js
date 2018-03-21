import React, {Component} from 'react';
import 'whatwg-fetch';
import 'babel-polyfill';
import fetchJsonp from 'fetch-jsonp';
import {hot} from 'react-hot-loader';
import Base64 from 'js-base64';



import PlayerBody from './player/playerbody';

const QUERY_URL = "https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg";
const QUERY_PARAM = "format=json&cid=205361747";

const songList = [
    {
        songid:213224236,
        songmid:"000uhMwj387EBp",
        songname:"牧马城市",
        albumid:3937394,
        albummid:"004ancxx18D4Tz",
        albumname:"牧马城市",
        singer: [
            {
                "id": 1507534,
                "mid": "001BHDR33FZVZ0",
                "name": "毛不易",
                "title": "毛不易",
                "type": 0,
                "uin": 0
            }
        ]
    },
    {
        songid:213226698,
        songmid:"001L5hVD2FqAcW",
        songname:"我要的",
        albumid:3937843,
        albummid:"000bRkEQ0t9w5Z",
        albumname:"我要的",
        singer: [
            {
                "id": 4607,
                "mid": "000aw4WC2EQYTv",
                "name": "张靓颖",
                "title": "张靓颖",
                "type": 1,
                "uin": 0
            }
        ]
    },
    {
        songid:213224236,
        songmid:"000uhMwj387EBp",
        songname:"牧马城市",
        albumid:3937394,
        albummid:"004ancxx18D4Tz",
        albumname:"牧马城市",
        singer: [
            {
                "id": 1507534,
                "mid": "001BHDR33FZVZ0",
                "name": "毛不易",
                "title": "毛不易",
                "type": 0,
                "uin": 0
            }
        ]
    },
    {
        songid:213224236,
        songmid:"000uhMwj387EBp",
        songname:"牧马城市",
        albumid:3937394,
        albummid:"004ancxx18D4Tz",
        albumname:"牧马城市",
        singer: [
            {
                "id": 1507534,
                "mid": "001BHDR33FZVZ0",
                "name": "毛不易",
                "title": "毛不易",
                "type": 0,
                "uin": 0
            }
        ]
    },
    {
        songid:213224236,
        songmid:"000uhMwj387EBp",
        songname:"牧马城市",
        albumid:3937394,
        albummid:"004ancxx18D4Tz",
        albumname:"牧马城市",
        singer: [
            {
                "id": 1507534,
                "mid": "001BHDR33FZVZ0",
                "name": "毛不易",
                "title": "毛不易",
                "type": 0,
                "uin": 0
            }
        ]
    },
    {
        songid:213224236,
        songmid:"000uhMwj387EBp",
        songname:"牧马城市",
        albumid:3937394,
        albummid:"004ancxx18D4Tz",
        albumname:"牧马城市",
        singer: [
            {
                "id": 1507534,
                "mid": "001BHDR33FZVZ0",
                "name": "毛不易",
                "title": "毛不易",
                "type": 0,
                "uin": 0
            }
        ]
    },
    {
        songid:213226698,
        songmid:"001L5hVD2FqAcW",
        songname:"我要的",
        albumid:3937843,
        albummid:"000bRkEQ0t9w5Z",
        albumname:"我要的",
        singer: [
            {
                "id": 4607,
                "mid": "000aw4WC2EQYTv",
                "name": "张靓颖",
                "title": "张靓颖",
                "type": 1,
                "uin": 0
            }
        ]
    },
    {
        songid:213226698,
        songmid:"001L5hVD2FqAcW",
        songname:"我要的",
        albumid:3937843,
        albummid:"000bRkEQ0t9w5Z",
        albumname:"我要的",
        singer: [
            {
                "id": 4607,
                "mid": "000aw4WC2EQYTv",
                "name": "张靓颖",
                "title": "张靓颖",
                "type": 1,
                "uin": 0
            }
        ]
    },{
        songid:213226698,
        songmid:"001L5hVD2FqAcW",
        songname:"我要的",
        albumid:3937843,
        albummid:"000bRkEQ0t9w5Z",
        albumname:"我要的",
        singer: [
            {
                "id": 4607,
                "mid": "000aw4WC2EQYTv",
                "name": "张靓颖",
                "title": "张靓颖",
                "type": 1,
                "uin": 0
            }
        ]
    },
    {
        songid:213226698,
        songmid:"001L5hVD2FqAcW",
        songname:"我要的",
        albumid:3937843,
        albummid:"000bRkEQ0t9w5Z",
        albumname:"我要的",
        singer: [
            {
                "id": 4607,
                "mid": "000aw4WC2EQYTv",
                "name": "张靓颖",
                "title": "张靓颖",
                "type": 1,
                "uin": 0
            }
        ]
    },
    {
        songid:213226698,
        songmid:"001L5hVD2FqAcW",
        songname:"我要的",
        albumid:3937843,
        albummid:"000bRkEQ0t9w5Z",
        albumname:"我要的",
        singer: [
            {
                "id": 4607,
                "mid": "000aw4WC2EQYTv",
                "name": "张靓颖",
                "title": "张靓颖",
                "type": 1,
                "uin": 0
            }
        ]
    },
    {
        songid:213226698,
        songmid:"001L5hVD2FqAcW",
        songname:"我要的",
        albumid:3937843,
        albummid:"000bRkEQ0t9w5Z",
        albumname:"我要的",
        singer: [
            {
                "id": 4607,
                "mid": "000aw4WC2EQYTv",
                "name": "张靓颖",
                "title": "张靓颖",
                "type": 1,
                "uin": 0
            }
        ]
    },
    {
        songid:213226698,
        songmid:"001L5hVD2FqAcW",
        songname:"我要的",
        albumid:3937843,
        albummid:"000bRkEQ0t9w5Z",
        albumname:"我要的",
        singer: [
            {
                "id": 4607,
                "mid": "000aw4WC2EQYTv",
                "name": "张靓颖",
                "title": "张靓颖",
                "type": 1,
                "uin": 0
            }
        ]
    },
    {
        songid:213226698,
        songmid:"001L5hVD2FqAcW",
        songname:"我要的",
        albumid:3937843,
        albummid:"000bRkEQ0t9w5Z",
        albumname:"我要的",
        singer: [
            {
                "id": 4607,
                "mid": "000aw4WC2EQYTv",
                "name": "张靓颖",
                "title": "张靓颖",
                "type": 1,
                "uin": 0
            }
        ]
    },
    {
        songid:213226698,
        songmid:"001L5hVD2FqAcW",
        songname:"我要的",
        albumid:3937843,
        albummid:"000bRkEQ0t9w5Z",
        albumname:"我要的",
        singer: [
            {
                "id": 4607,
                "mid": "000aw4WC2EQYTv",
                "name": "张靓颖",
                "title": "张靓颖",
                "type": 1,
                "uin": 0
            }
        ]
    }
]


class Qplayer extends Component {
    constructor(props){
        super(props);
        ///
        this.state = {
            uin: 0,
            currentSongIndex: 0,
            musicSrc: '',  // 用于下载
            comments:0,
            guid: 1234567890,
            isPlay: false,
            isPure: false,
            songList: songList,
            mode:0,  // 0--单曲 1--循环 2--顺序 3--随机
            current:0,
            currentPercent:0,
            progress:0,
            total:0,
            volume: 4,
            isMute: false,
            lyricTexts: [],
            lyricTimePoint:[],
            currentLine:0
        }

        ///
        let option = {
            hideControls: true,
            controls:[],
            blankUrl: ""
        }
        let player = plyr.setup('.js-player',option)[0];
        this.vkeys = [];
        // window.addEventListener("beforeunload",function (event) {
        //     return "hahahha";
        // });
    }
    componentDidMount() {
        let player = plyr.get('.js-player')[0]
        // player.on('loadeddata', (e) => {
        //     console.log("finished",player.getMedia().buffered.end(0));
        // });
        player.on('timeupdate', (e)=> {
            let current = Math.floor(player.getCurrentTime());
            let currentPercent = (player.getCurrentTime()*100/player.getDuration()).toFixed(2);
            //console.log(player.getMedia().buffered.end(0));
            let trange = player.getMedia().buffered;
            let currentLine = 0;
            for(let i=0;i<this.state.lyricTimePoint.length;i++){
                if(current >= this.state.lyricTimePoint[i]){
                    currentLine = i;
                }
            }
            //this.setState({current: current, currentPercent:currentPercent, progress:  trange.end(trange.length-1)})
            this.setState({current: current, currentPercent:currentPercent, currentLine:currentLine})
        });

        player.on('volumechange', (e)=> {
            //console.log(player.getVolume()*10, player.volume)
            this.setState({volume: player.getVolume()*10, isMute: player.isMuted()})
        })

        player.on('playing', (e)=>{
            let total = Math.floor(player.getDuration()); 
            this.setState({isPlay: true, total: total});
        });

        // player.on('seeking', (e)=>{
        //     this.setState({isPlay: false})
        // })
        // player.on('seeked', (e)=> {
        //     this.setState({isPlay: true});
        // })

        let songMid = this.getCurrentSong().songmid;
        this.playSong(songMid);
    }

    getCurrentSong(){
        return this.state.songList[this.state.currentSongIndex];
    }
    getQueryUrl(songmid) {
        return `${QUERY_URL}?${QUERY_PARAM}&uin=0\
        &songmid=${songmid}&filename=C400${songmid}.m4a&guid=${this.state.guid}`;
    }
    playSong(songmid) {
        if(songmid in this.vkeys && this.vkeys[songmid]) {
            let vkey = this.vkeys[songmid];
            let player = plyr.get('.js-player')[0];
            let musicSrc = this.getMusicSrc(songmid, vkey, this.state.guid);
            this.setState({musicSrc: musicSrc});
            player.source({
                type: 'audio',
                sources: [{src: musicSrc,
                    type: 'audio/mp4'
                }]
            })
            player.setVolume(this.state.volume);
            player.play();
            this.getLyric(songmid);
            window.clearInterval(window.progress);
            window.progress = setInterval( ()=>{
                let trange = player.getMedia().buffered;
                if(trange.length) {
                    if(trange.end(trange.length-1) === player.getDuration()){
                        window.clearInterval(window.progress);
                    }
                    this.setState({progress: trange.end(trange.length-1)})
                }   
            }, 100);
        }else{
            let queryUrl = this.getQueryUrl(songmid);
            fetchJsonp(queryUrl,{mode:'cors',method:'GET', jsonCallback:'MusicJsonCallback'})
            .then( (response) => response.json())
            .then( (responseData) => {
                let vkey = responseData.data.items[0].vkey;
                this.vkeys[songmid] = vkey;
                this.playSong(songmid);
            })
            .catch( (error) => {
            console.log('error fetching and parsing data', error);
            });
        }
    }
    getMusicSrc(songmid, vkey, guid) {
        return `http://dl.stream.qqmusic.qq.com/C400${songmid}.m4a?vkey=${vkey}&guid=${guid}&uin=0&fromtag=66`
    }
    getLyric(songmid){ 
        let lyricUrl = "/lyric/fcgi-bin/fcg_query_lyric_new.fcg?pcachetime="
        + Date.now()
        + "&songmid="
        + songmid
        + "&g_tk=5381&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0";
        fetchJsonp(lyricUrl, {mode:'cors',method:'GET', jsonpCallbackFunction:'MusicJsonCallback_lrc'})
        .then( (response) => response.json())
        .then( (responseData) => {
            //console.log(decodeURIComponent(escape(window.atob(lyricData))));
            //this.setState({lyricData: decodeURIComponent(escape(window.atob(lyricData)))})
            
            let lyricList = decodeURIComponent(escape(window.atob(responseData.lyric))).split('\n');
            console.log(lyricList);
            let timeReg = /\[(\d{2}):(\d{2})\.(\d{2})\]/;
            let lyricTexts = [];
            let lyricTimePoint = [];
            for(let i=0;i<lyricList.length;i++) {
                let lyricItem = lyricList[i];
                let time = lyricItem.match(timeReg);
                let lyricText = lyricItem.replace(timeReg, '');
                if(time&&lyricText){
                    let second = Number(time[1])*60 + Number(time[2]) + Number(time[3])/100;
                    let line = lyricTimePoint.push(second) -1;
                    lyricTexts.push(lyricText);
                }
            }
            this.setState({lyricTexts:lyricTexts,lyricTimePoint:lyricTimePoint,currentLine:0});
        })
    }
    
    play(){
        let player = plyr.get('.js-player')[0]
        player.play();
    }
    pause(){
        let player = plyr.get('.js-player')[0]
        player.pause();
    }
    // --------------//
    changeSong(newIndex) {
        let songMid = this.state.songList[newIndex].songmid;
        this.playSong(songMid);
        this.setState({currentSongIndex: newIndex, progress:0});
    }
    playOrPause() {
        if(this.state.isPlay) {
            this.setState({isPlay: false});
            this.pause();
        }else {
            this.setState({isPlay: true});
            this.play();
        }
    }
    songSeek(timePoint) {
        let player = plyr.get('.js-player')[0];
        // console.log(player);
        player.seek(timePoint);
        // if(timePoint > this.state.current) {
        //     player.forward(timePoint-this.state.current);
        // }else {
        //     player.rewind(this.state.current - timePoint);
        // }
    }
    updateVolume(newVolume) {
        let player = plyr.get('.js-player')[0];
        // console.log(player);
        player.setVolume(newVolume);
    }
    nextSong() {
        let nextSongIndex = '';
        if(this.state.currentSongIndex === this.state.songList.length-1) {
            nextSongIndex = 0;
        }else {
            nextSongIndex = this.state.currentSongIndex + 1;
        }
        this.changeSong(nextSongIndex);
        // let songMid = this.state.songList[nextSongIndex].songmid;
        // this.playSong(songMid);
        // this.setState({currentSongIndex: nextSongIndex, progress:0});
    }
    render() {
        return <PlayerBody songList={this.state.songList} currentSongIndex={this.state.currentSongIndex}
                volume={this.state.volume} currentPercent={this.state.currentPercent}
                isPlay={this.state.isPlay} current={this.state.current} musicSrc={this.state.musicSrc}
                progress={this.state.progress} total={this.state.total} mode={this.state.mode}
                comments={this.state.comments} isPure={this.state.isPure} isMute={this.state.isMute}
                lyricTexts={this.state.lyricTexts} lyricTimePoint={this.state.lyricTimePoint}
                currentLine={this.state.currentLine}
                callbacks={{
                    playOrPause: this.playOrPause.bind(this),
                    nextSong: this.nextSong.bind(this),
                    changeSong: this.changeSong.bind(this),
                    songSeek: this.songSeek.bind(this),
                    updateVolume: this.updateVolume.bind(this)
                }}
        />
    }
}

//export default hot(module)(Qplayer);
export default Qplayer;