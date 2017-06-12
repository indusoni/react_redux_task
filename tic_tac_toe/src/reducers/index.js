export default function allReducers(state={},action) {


 switch(action.type){
 	case "TASK_ADD":
  
 	let activePlayer = state.activePlayer; 
	let payload= {};
 	if(state.ticTacToeCell[action.payload]["cellValue"]===null){
 		payload[action.payload] = {"cellValue":state[state.activePlayer]};
 		activePlayer = state.activePlayer==="B"?"A":"B";
 	}else{
 		payload[action.payload] = {...state.ticTacToeCell[action.payload]};
 	}


 	state = {...state,activePlayer,ticTacToeCell:{...state.ticTacToeCell,...payload}}
 	
 	break;



 	default:
 	break;


 }
return state;


}