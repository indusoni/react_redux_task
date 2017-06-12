import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import allReducers from './reducers'  
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let ticTacToeCell = {}; 
for (var i=1;i<=9;i++){
	ticTacToeCell["cell"+i] = {"cellValue":null};
	
}
const initialState = { 
  A:"X",
  B:"O",
  activePlayer:"A" ,ticTacToeCell 
};


const store = createStore(allReducers,initialState)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
