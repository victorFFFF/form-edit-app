import React, { Component } from "react";

class FolderEdit extends Component{
    constructor(props){
        super(props);
        this.state = {
         Fname: '',
         Lname: '',
        };
        this.baseState = this.state; 
     }
     changeFirst = (event) => {
        this.setState({
            Fname: event.target.value,
        });
    }

    changeLast = (event) => {
        this.setState({
            Lname: event.target.value,
        });
    }
   
    state = { showing: true };
        render(){
            const { showing } = this.state;
            return  <div>

            <h4 style={{ display: (showing ? 'none' : 'block') }}>First Name :{this.state.Fname}</h4>   
            <h4 style={{ display: (showing ? 'none' : 'block') }} >Last Name :{this.state.Lname}</h4>   
            <input style={{ display: (showing ? 'block' : 'none') }} type='text' placeholder = "FirstName"  onChange ={this.changeFirst}/>
            <input style={{ display: (showing ? 'block' : 'none') }} type='text' placeholder = "LastName"   onChange ={this.changeLast} /> 

            <button  style={{ display: (showing ? 'block' : 'none') }} onClick={() => this.setState({ showing: !showing })}>Save</button>
            <button  style={{ display: (showing ? 'block' : 'none') }}  onClick={() => this.setState({...this.baseState, showing: !showing }) }>Cancel</button>
            <button  style={{ display: (showing ? 'none' : 'block') }} onClick={() => this.setState({ showing: !showing }) }>Edit</button>
        </div>
        }
}


export default FolderEdit;