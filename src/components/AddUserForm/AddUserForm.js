import React, { Component } from 'react';

export default class AddUserForm extends Component {
  
    state = {
        name:"",
        email:"",
      };
  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]:value})
  }

handleSubmit = (e) => {e.preventDefault()

this.props.addUser({...this.state});
this.props.onFormClose();
}

    render() {
        const {name,email} = this.state;
    return (
      <form onSumbit = {this.handleSubmit}>
<label>Name
<input type='text' name="name" value={name} onChange = {this.handleChange} >
</input>
</label>
<label>Email
<input type='email' name="email" value={email} onChange = {this.handleChange}>
</input>
</label>
<button type='submit'>Submit</button>

      </form>
    );
  }
}
