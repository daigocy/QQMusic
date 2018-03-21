import React, {Component} from 'react';

import NewSongItem from './newsongitem';

import './newsongcontent.scss';

class NewSongContent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let pageLists = this.props.pageLists;
        let totalPages = pageLists.length
        let newLists = [pageLists[totalPages-1], ...pageLists, pageLists[0]]
        let content = newLists.map((page, pageIndex) => {
            return (
                <ul className="songlist" key={pageIndex}>
                    {
                        page.items.map((item, itemIndex)=>{
                            return (
                                <li className="songitem" 
                                key={itemIndex}
                                style={{width: `${100/this.props.cols}%`}}>
                                <NewSongItem item={item} />
                                </li>
                            )
                        })
                    }
                </ul>
            )
        });
        return (
            <div className="new-song-content">
            {content}
            </div>
        )
    }
}

export default NewSongContent;