import React, { Component } from "react";
import PropTypes from "prop-types";

class FolderContent extends Component {
  constructor() {
    super();
    this.state = {isShow: true};
  }

  handleToggle(){
    this.setState({isShow: !this.state.isShow});
    console.log(this.state.isShow)
  }


  render() {
    const showFolder = this.state.isShow ? null:(
        <ul>
            <li>File1</li>
            <li>FIle2</li>
            <li>File3</li>
        </ul>
    );
    return (
        <div>
            <h2>Home</h2>
            <div>
                {showFolder}
            </div>
          <button onClick={() => this.handleToggle()}>toggle</button>
        </div>
    );
    
  }
}


export default FolderContent;