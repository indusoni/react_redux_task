export default function (state=[],action) {

    switch(action.type){
        case 'TASK_ADD':

        state =  [...state,action.payload];
        break;

        case "TASK_REMOVE":
              
         let  revertedList =  state.filter((addedTask) => { return addedTask.key !== action.payload });

		state =  revertedList;
        break;

        default:
        state = state
        break;
    }
    return state;
    
}
