import React, {Component} from 'react';

import SlideNav from './slidenav';
import BallList from './balllist';

import './slidecontainer.scss';


class SlideContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            totalPages: this.props.totalPages,
            showTransition: true
        };
    }
    slideLeft() {
        this.setState({
            showTransition: true,
            currentPage: this.state.currentPage + 1,
        });
        //setTimeout(this.checkpage.bind(this), 0.1);
    }
    slideRight() {
        this.setState({
            currentPage: this.state.currentPage - 1,
            showTransition: true,
        })
    }
    slidePage(i) {
        this.setState({
            currentPage: i,
            showTransition: true,
        })
    }
    checkpage() {
        if(this.state.currentPage > this.state.totalPages){
            
           this.setState({
                showTransition: false,
                currentPage: 1,
            })  
        }
        if(this.state.currentPage < 1){
           this.setState({
                showTransition: false,
                currentPage: this.state.totalPages,
            })   
        }
    }


    render() {

        return(
            <div className="slide-container" href="javascript:;">
                <div className="content">
                    <h2 className="title">{this.props.title}</h2>
                    <SlideNav types={this.props.types} currentTypeId={this.props.currentTypeId}
                    changeTabCallback={this.props.changeTabCallback}/>
                    <div className="window">
                        <div className="slidebody" style={{
                            left: `-${this.state.currentPage}00%`,
                            transitonProperty: "left",
                            transitionDuration: this.state.showTransition? "0.5s":"0s"
                            }} onTransitionEnd={this.checkpage.bind(this)}>
                            {this.props.children}
                        </div>
                    </div>
                    <BallList totalPages={this.state.totalPages}
                        currentPage={this.state.currentPage}
                        slidePageCallback={this.slidePage.bind(this)}
                    />
                </div>
                <div className="shaddow">
                    <a className="btn left" href="javascript:;" 
                        onClick={this.slideLeft.bind(this)}>
                        <i className="arrow left bgimg"></i>
                    </a>
                    <a className="btn right" href="javascript:;" 
                        onClick={this.slideRight.bind(this)}>
                        <i className="arrow right bgimg"></i>
                    </a>
                </div>
                
            </div>
        )
    }   
}

export default SlideContainer;