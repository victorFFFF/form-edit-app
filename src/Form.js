import React, { Component } from "react";

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
         Fname: 'Firstname',
         Lname: 'Lastname'
        };
     }
     handleFnameChange = (event) => {
        this.setState({
            Fname: event.target.value
        });
    }
    handleLnameChange = (event) => {
        this.setState({
            Lname: event.target.value
        });
    }

    state = { showing: true };
        render(){
            const { showing } = this.state;
            return  <div>
            <div>
            <input type='text' value={this.state.Fname} onChange={this.handleFnameChange} />
            </div>
            <div>
            <input type='text' value={this.state.Lname} onChange={this.handleLnameChange} /> 
            <button  style={{ display: (showing ? 'block' : 'none') }} onClick={() => this.setState({ showing: !showing })}>Save</button>
            <button  style={{ display: (showing ? 'block' : 'none') }}  onClick={() => this.setState({ showing: !showing })}>Cancel</button>
            </div>
            <button  style={{ display: (showing ? 'none' : 'block') }} onClick={() => this.setState({ showing: !showing }) }>Edit</button>
        </div>
        }
}


export default Form;