import React, {Component} from 'react';
import 'whatwg-fetch';
import 'babel-polyfill';

import SlideContainer from '../slide/slidecontainer';
import NewSongContent from './newsongcontent';

import configData from '../../../test_config/newsong.json';

class NewSongList extends Component {
    constructor(props) {
        super(props);
        let songs = configData.new_song.data.song_list
        if (songs.length > 54) {
            songs = songs.slice(0, 54);
        }
        let pageLists = [];
        let totalPages = Math.floor(songs.length / 9);
        songs = songs.slice(0, totalPages*9);
        for (let i = 1; i <= totalPages; i++) {
            pageLists.push({pageNum: i, items: []})
        }
        songs.map((song, index) => {
            let pageNum = Math.floor(index / 9) + 1;
            let img_src = "//y.gtimg.cn/music/photo_new/T002R90x90M000" + song.album.mid + ".jpg?max_age=2592000";
            let img_alt = song.name;
            let singers = song.singer[0].name;
            if(song.singer.length > 1) {
                for(let index=1;index<song.singer.length;index++){
                    singers+=" / "+song.singer[index].name;
                }
            };
            let url = song.url;
            let href = `https://y.qq.com/n/yqq/album/${song.album.mid}.html`
            let minute = Math.floor(song.interval/60);
            let second = song.interval - minute *60;
            let time = (minute<10?'0':'') + minute+":" + (second<10?'0':'')+second;
            
            let time_public = song.time_public;
            pageLists[pageNum - 1].items.push({
                    src: img_src,
                    alt: img_alt,
                    singer: singers,
                    url: url,
                    time: time,
                    time_public: time_public,
                    href: href
                })
        })
        let types = configData.new_song.data.type_info;

        this.state = {
            types: types,
            currentTypeId: types[0].id,
            totalPages: totalPages,
            pageLists: pageLists
        };
    }
    changeTab(newId) {
        this.setState({currentTypeId: newId});
    }

    render() {
        return (
            <div className='new-song-box' style={{position: "relative"}}>
                <SlideContainer title="新歌首发"
                    types={this.state.types} totalPages={this.state.totalPages}
                    currentTypeId={this.state.currentTypeId}
                    changeTabCallback={this.changeTab.bind(this)}>
                    <NewSongContent pageLists={this.state.pageLists} cols={3} />
                </SlideContainer>
            </div>
        )
    }
}

export default NewSongList;