import React, { Component } from "react";
import "./SwipeableList.css";

class SwipeableList extends Component{
 render(){
     const { children } = this.props;

     return <div className="list">{ children }</div>
 }
}

export default SwipeableList;