// {
//     "recomPlaylist": {
//         "data": {
//             "v_hot": [
//                 {
//                     "album_pic_mid": "004ai1iF4TwXx7",
//                     "content_id": 3756805179,
//                     "cover": "http://p.qpic.cn/music_cover/ibSiagqKjw1zfTgxY7F8CfE4pGxH3A6gGKicxc9qXjAGibRibATL233PtBg/600?n=1",
//                     "creator": 3562963616,
//                     "edge_mark": "http://y.gtimg.cn/music/common/upload/hot_recommend_item/215957.png",
//                     "id": 1179,
//                     "is_dj": false,
//                     "is_vip": false,
//                     "jump_url": "",
//                     "listen_num": 95900,
//                     "pic_mid": "0033AXoJ3HPlBd",
//                     "rcmdcontent": "编辑推荐：每日新歌：佛罗里达暗夜魅舞",
//                     "rcmdtemplate": "编辑推荐",
//                     "rcmdtype": 1,
//                     "singerid": 0,
//                     "title": "每日新歌：佛罗里达暗夜魅舞",
//                     "tjreport": "",
//                     "type": 10014,
//                     "username": "QQ音乐新歌推荐"
//                 }
//             ]
//         },
//         "code": 0                
//     },
//     "code":0,
//     "ts": 1520262086519
// }
import React, {Component} from 'react';

import SlideContainer from '../slide/slidecontainer';
import RecomendContent from './recomendcontent';

import initCategory from '../../../test_config/initstate.json';
import {recomPlaylist} from '../../../test_config/recomandalbum.json';

class RecomendList extends Component {
    constructor(props){
        super(props);
        let inittypes = initCategory.category.data.category[0].items;
        if(inittypes.length> 5) {
            inittypes = inittypes.slice(0,5);
        }
        let types = [{id:0, title:'为你推荐'}];
        inittypes.map((type) =>{
            types.push({id: type.item_id, title: type.item_name})
        })
        let recAlbums = recomPlaylist.data.v_hot;
        if(recAlbums.length >30) {
            recAlbums = recAlbums.slice(0,30);
        }
        let pageLists =[];
        let totalPages = Math.floor(recAlbums.length / 5);
        recAlbums = recAlbums.slice(0, totalPages*5);
        for (let i=1; i<=totalPages;i++){
            pageLists.push({pageNum:i, items: []});
        }
        recAlbums.map((album, index) => {
            let pageNum = Math.floor(index/5) + 1;
            let img_src = album.cover;
            let img_alt = album.title;
            let img_href = `//y.qq.com/n/yqq/playsquare/${album.content_id}.html#stat=y_new.index.playlist.pic`;
            let listen_num = '';
            if(album.listen_num > 10000){
                listen_num += (album.listen_num/10000).toFixed(1) + '万';
            }
            else{
                listen_num +=album.listen_num;
            }
            pageLists[pageNum-1].items.push({
                src: img_src,
                alt: img_alt,
                href: img_href,
                listen_num: listen_num
            })
        })
        this.state = {
            types : types,
            currentTypeId : 0,
            totalPages: totalPages,
            pageLists: pageLists
        }
    }
    changeTab(newId) {
        this.setState({currentTypeId: newId});
    }
    render() {
        return (
            <div className='recomend-list' style={{position: "relative"}}>
                <SlideContainer title="歌单推荐"
                    types={this.state.types} totalPages={this.state.totalPages}
                    currentTypeId={this.state.currentTypeId}
                    changeTabCallback={this.changeTab.bind(this)}>
                    <RecomendContent pageLists={this.state.pageLists} cols={5} />
                </SlideContainer>
            </div>
        )
    }
}

export default RecomendList;
