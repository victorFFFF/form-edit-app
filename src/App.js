import React, { Component } from 'react';
import EditForm from "./EditForm"
import FileToggle from "./FileToggle"
import './App.css';


class App extends Component{
  render(){
  return (
    <div>
     <EditForm />
     <FileToggle/>
     
    </div>
  )
  }
}

export default App;
