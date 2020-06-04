import React, { Component } from "react";
import PropTypes from "prop-types";

class FormEdit extends Component {
  constructor() {
    super();
    this.state = {isShowName: true,
                  firstName: '',
                  lastName: '' ,
                  tempFirst: '',
                  tempLast: ''};
  }

  handleEdit(){
    this.setState({isShowName: false});
    console.log(this.state.isShowName)
  }

  handleCancel(){
    this.setState({isShowName: true});
    console.log(this.state.isShowName)
  }

  handleSave(){
    this.setState({isShowName: true, firstName: this.state.tempFirst, lastName: this.state.tempLast});
    console.log(this.state.isShowName)
  }

  handleFirst = (evt)=>{
    this.setState({tempFirst: evt.target.value});
    console.log(this.state.tempFirst)
  }

  handleLast = (evt)=>{
    this.setState({tempLast: evt.target.value});
  }

  render() {
    if(this.state.isShowName){
      return (
        <div>
          <div>
            First Name: {this.state.firstName}
          </div>
          <div>
            Last Name: {this.state.lastName}
          </div>
          <button onClick={() => this.handleEdit()}>edit</button>
        </div>
      );
    }else{
      return(
        <div>
          <form>
          <label>First Name</label>
          <input type="text" name="first" placeholder={this.state.tempFirst} value = {this.state.tempFirst} onChange = {this.handleFirst} />
        
          <label>Last Name</label>
          <input type="text" name="last" placeholder={this.state.tempLast} value = {this.state.tempLast} onChange = {this.handleLast}/>
          </form>
          <button onClick={() => this.handleSave()}>save</button>
          <button onClick={() => this.handleCancel()}>cancel</button>
        </div>
      );
    }
  }
}

FormEdit.propTypes = {
  start: PropTypes.number.isRequired,
};

export default FormEdit;