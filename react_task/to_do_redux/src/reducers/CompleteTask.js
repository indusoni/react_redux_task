export default function (state=[],action) {

    switch(action.type){
        case 'TASK_COMPLETE':
        	state =  [...state,action.payload];
       
        break;
        case "TASK_REMOVE":
        case 'TASK_INCOMPLETE':

        let  revertedList =  state.filter((completeTask) => { return completeTask.key !==action.payload });
			state =  revertedList;
        break;

        default:
        state =  state;
        break;
    }
    return state;
    
}