export const addToDo = (task) => {
   
    return {
        type: 'TASK_ADD',
        payload: {task,key:Date.now()}
    }
};
export const markComplete = (key) => {
  
    return {
        type: 'TASK_COMPLETE',
        payload: key
    }
};
export const markInComplete = (key) => {
  
    return {
        type: 'TASK_INCOMPLETE',
        payload: key
    }
};
export const removeTask = (key) => {
  
    return {
        type: 'TASK_REMOVE',
        payload: key
    }
};
