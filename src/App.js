import React, { Component } from 'react';
import FormEdit from "./FormEdit"
import FolderEdit from "./FolderEdit"
import './App.css';


class App extends Component{
  render(){
  return (
    <div className ="container">
      <div className = "d-flex justify-content-center">
     <FormEdit />
     <FolderEdit />
     </div>
    </div>
  )
  }
}

export default App;
