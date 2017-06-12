
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
class ListItems extends Component{
   constructor(props){
       super(props)
       this.data =[];
       
   }
 

	componentWillReceiveProps(newProps){
	   if(newProps.source === 'newTask' ){
         this.data = newProps.toDo;
       }else{
       	this.data = newProps.completed;
       }
	}
    markComplete(event,task,key){
		if(event.target.checked){
			this.props.markComplete({task,key});

			
		}else{
			this.props.markInComplete(key);

			
		}
	}
	removeTask(event,key){
		this.props.removeTask(key);
	}
  render(){
  	
    return <div> 
				<ul >
					{this.data.map( (taskList) => { 
						return <li key={taskList.key}> 
									{taskList.task}  
									{this.props.source === "newTask" && <div><input type="checkbox" onChange={ (event) =>  this.markComplete(event,taskList.task,taskList.key)  } /> <input type="button" name="remove" value="X" onClick = { (event) => this.removeTask(event,taskList.key) }/>  </div> } 
									
								</li>})}
				</ul>
					
			</div>;
  }
}

function matchDispatchToProps(dispatch){
   return bindActionCreators({...Actions}, dispatch);
} 
export default connect((state)=>state,matchDispatchToProps)(ListItems);