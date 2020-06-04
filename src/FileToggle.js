import React, { Component } from "react";

 

class FileToggle extends Component {

  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  
  
Click = () => {
    this.state.show
      ? this.setState({ show: false })
      : this.setState({ show: true });
  };
  



  render() {
    console.log("in render");

    let visible = this.state.show ? null : (
      <div>
        <ul>
          <li>File 1</li>
          <li>File 2</li>
          <li>File 3</li>
        </ul>
      </div>

    );
    return (
      <div className="ml-5">
        <h2>Home</h2>
        {visible}
        <button onClick={this.Click}>Toggle</button>
      </div>
    );

  }
}
export default FileToggle;