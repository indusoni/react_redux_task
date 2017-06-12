import React, { Component } from 'react';


class ToDoList extends Component{
	constructor(props){
		super(props);
		this.state = {"completed":[]};
	}
	markComplete(event,task,key){
		if(event.target.checked){
			this.setState({completed:[...this.state.completed,{"task":task,key}]});
		}else{
			let  revertedList =  this.state.completed.filter((completeTask) => { return completeTask.key !==key });
			this.setState({completed:[...revertedList]});
		}
	}
	render(){

		return <div> 
					<ul >
						{ this.props.todoItem.map( (taskList) => { return <li key={taskList.key}>{taskList.task} <input type="checkbox" onChange={ (event) =>  this.markComplete(event,taskList.task,taskList.key) } /> </li>})}
					</ul>
					<CompleteTask  completeItem = {this.state.completed}/>
				</div>;

	}
}


class CompleteTask extends Component{

	render(){
		return <div>  <h4>My Completed Task List ({this.props.completeItem.length}) </h4><ul >
		{ this.props.completeItem.map( (taskList) => { return <li key={taskList.key}>{taskList.task}  </li>})}
		
		</ul></div>

	}
}


class App extends Component {

	constructor(props){
		super(props);
		this.state = {"toDo":[]};
	}

	addToDo(event){
		if(event.keyCode === 13){
			this.setState({toDo:[...this.state.toDo,{"task":event.target.value,key:Date.now()}]});
			event.target.value ="";
		}

	}

	render() {
		return <div> 
					<h4>My To Do List</h4>
					<input type="text" name="myInput" placeholder="Title..." onKeyUp={(event)=>this.addToDo(event)} />
					<ToDoList todoItem ={this.state.toDo}/>	
				</div>;	

	}
}







export default App;
