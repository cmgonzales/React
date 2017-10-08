import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
  super(props);
 
  this.state = {
    headerText: "this is a test",
    contextText: "hi"
  };
}
render(){
return(
  <div className="App">
    <h2>{this.state.headerText}</h2>
    <h1>{this.state.contextText}</h1> 
   </div>
    );
  }
}
class Header extends Component{
  constructor(props){
    super(props);
   
    this.state = {
      headerText: "this is a test"
    };
  }
  render(){
  return(
    <div className="App">
      <h2>{this.state.headerText}</h2>
     </div>
  );
}
}
class Content extends Component{
  render(){
  return(
    <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome to React</h2>
   </div>
  );
}
}

export default App;
