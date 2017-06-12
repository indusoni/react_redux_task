export const markCell = (cellId)=> {
   
    return {
        type: 'TASK_ADD',
        payload : cellId
        
    }
};
export const resetCell = ()=> {
   
    return {
        type: 'RESET_GAME'
        
    }
};