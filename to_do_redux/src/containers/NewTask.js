import React, { Component } from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ListItems from '../component/ListItems';
import {addToDo} from '../actions';
  
class NewTask extends Component{
 
 
 addToDo(event){
		if(event.keyCode === 13){

			this.props.addToDo(event.target.value);
			event.target.value ="";
		}

	}
  render(){

    return <div>
      <h4>My To Do List ( { this.props.toDo.length} )</h4>
	  <input type="text" name="myInput" placeholder="Title..." onKeyUp={(event)=>this.addToDo(event)} />

     <ListItems  source="newTask"/>
    </div> ; 
  }

}
function mapStateToProps(state) {
    return {
        toDo: state.toDo
    };
}
function matchDispatchToProps(dispatch){
   return bindActionCreators({addToDo: addToDo}, dispatch);
} 
export default connect(mapStateToProps,matchDispatchToProps)(NewTask);