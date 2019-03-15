import "./SwipeableListItem.css";
import React, { Component } from "react";

export default class SwipeableListItem extends Component {

    // DOM Refs
    listElements;
    wrapper;
    background;

    render(){
        return (
            <>
                <div className="Wrapper" ref={div => (this.wrapper = div)}>
                    <div className="Background">
                        <span>Delete</span>
                    </div>
                    <div ref={div => (this.listElements = div)} className="ListItem">{ this.props.children }</div>
                </div>
            </>
        );
    }
}