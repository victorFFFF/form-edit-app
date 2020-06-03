import React, { Component } from "react";

class FolderEdit extends Component{
    constructor(props){
        super(props);
        this.state = {
         Fname: '',
         Lname: ''
        };
        this.baseState = this.state; 
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
            return  <div className="mt-2">
            <div>
        <input type='text' placeholder = "FirstName" value={this.state.Fname} onChange={this.handleFnameChange}/>
            </div>
            <div>
            <input type='text' placeholder = "LastName"  value={this.state.Lname} onChange={this.handleLnameChange} /> 
            <button  style={{ display: (showing ? 'block' : 'none') }} onClick={() => this.setState({ showing: !showing })}>Save</button>
            <button  style={{ display: (showing ? 'block' : 'none') }}  onClick={() => this.setState({ ...this.baseState, showing: !showing })}>Cancel</button>
            </div>
            <button  style={{ display: (showing ? 'none' : 'block') }} onClick={() => this.setState({ showing: !showing }) }>Edit</button>
        </div>
        }
}


export default FolderEdit;