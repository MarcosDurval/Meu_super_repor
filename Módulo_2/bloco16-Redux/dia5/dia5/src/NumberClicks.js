import React, { Component } from "react";
import { connect } from "react-redux";

class NumberClicks extends Component{
  render(){
    console.log(this.props)
    return(
      <div>{this.props.counter}</div>
    )
  }
}

const mapStateToProps = (state) =>({
  counter: state.clickReducer.counter
})
export default connect(mapStateToProps)(NumberClicks)