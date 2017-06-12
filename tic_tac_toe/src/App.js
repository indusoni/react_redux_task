import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as Actions from "./actions"
import './App.css';

class App extends Component {

 
  markCell(event){
      this.props.markCell(event.target.id);
  }
  render() {
   
    return (
      <div>
         <h1>Tic Tac Toe</h1>
         <h2> Player { this.props.activePlayer} </h2>
        
          
            <table>
            <tbody>
            {
              [0,1,2].map((value)=>{
                
                   return <tr key={value}>
                             { Object.keys(this.props.ticTacToeCell).map( (cellInfo,index) =>{ return ((index>=(value*3))&& (index<(value*3)+3)) && <td id={cellInfo} key={cellInfo} onClick = {(event)=>{ this.markCell(event) }}>{this.props.ticTacToeCell[cellInfo].cellValue}</td> }) }
                            
                          </tr>

              })
             
            }
           

            </tbody>
             </table>
             
         
        
        

      
      </div>
    );
  }
}


function mapAction(dispatch){
  return bindActionCreators({...Actions}, dispatch); 
}
export default connect((state)=>state,mapAction)(App);
