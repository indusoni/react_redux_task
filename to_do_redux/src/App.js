import React, { Component } from 'react';

import CompletedTask from './containers/CompletedTask'

import NewTask from './containers/NewTask'
  

class App extends Component {

 
  render() {
    return <div> 
            <h1>Hello!</h1>
            <NewTask />
            <CompletedTask/>
          
        </div>;

  }
}






export default App;
