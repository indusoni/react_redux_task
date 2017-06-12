import {combineReducers} from 'redux';
import AddTask from './AddTask';
import CompleteTask from './CompleteTask';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    toDo: AddTask,
    completed: CompleteTask
});
 
export default allReducers
