import React, { Component } from 'react';
import FormEdit from "./FormEdit";
import FolderContent from "./FolderContent";
import { render } from '@testing-library/react';
import './App.css';

class App extends Component {
  render(){
    return (
      <>
        <FormEdit/>
        <FolderContent/>
      </>
    );
  }
}

export default App;
