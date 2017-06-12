import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ListItems from '../component/ListItems';
import {markComplete} from '../actions';

class CompletedTask extends Component{
  render(){
      return <div><h4>My Complete Task List( { this.props.completed.length} )</h4><ListItems source="complete"/></div>
  }
}

function mapStateToProps(state) {
    return {
        completed: state.completed
    };
}

function matchDispatchToProps(dispatch){
   return bindActionCreators({markComplete: markComplete}, dispatch);
} 
export default connect(mapStateToProps,matchDispatchToProps)(CompletedTask);

