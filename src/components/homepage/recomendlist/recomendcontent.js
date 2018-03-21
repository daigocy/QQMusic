import React, {Component} from 'react';

import RecomendItem from './recomenditem';

import './recomendcontent.scss';

class RecomendContent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let pageLists = this.props.pageLists;
        let totalPages = pageLists.length
        let newLists = [pageLists[totalPages-1], ...pageLists, pageLists[0]]
        let content = newLists.map((page, pageIndex) => {
            return (
                <ul className="recomendlist" key={pageIndex}>
                    {
                        page.items.map((item, itemIndex)=>{
                            return (
                                <li className="recomenditem" 
                                key={itemIndex}
                                style={{width: `${100/this.props.cols}%`}}>
                                <RecomendItem item={item} />
                                </li>
                            )
                        })
                    }
                </ul>
            )
        });
        return (
            <div className="recomend-content">
            {content}
            </div>
        )
    }
}

export default RecomendContent;