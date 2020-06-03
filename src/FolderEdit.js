import React, { Component } from "react";

 

class File extends Component {

  constructor() {

    super();

 

    this.state = {

      tog: false

    

    };


  }



Click = () => {

    this.state.tog

      ? this.setState({ tog: false })

      : this.setState({ tog: true });

  };
  render() {
    console.log("in render");

    let visible = this.state.tog ? null : (

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
export default File;