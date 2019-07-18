import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../actions/postActions';

class postForm extends Component {
constructor(props){
  super(props);
  this.state = {
     name: '',
     password: '',
     v: 0,
     email:''
  };

  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
}
onChange(e) {
  this.setState({ [e.target.name]: e.target.value });
}
onSubmit(e) {
 e.preventDefault();
 var sequence = this.state.v + 1;
 this.setState({v: sequence});
 var post = {
   name: this.state.name,
   password: this.state.password,
   email: this.state.email,
   v: this.state.v
 }
this.props.login(post);
}

  render() {
    return (
      <div>
        <h1>Post Form</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name: </label><br />
            <input type="text" name="name" onChange={this.onChange} value={this.state.name}/>
          </div>
          <div>
            <label>Password: </label><br />
            <input type="password" name="password" onChange={this.onChange} value={this.state.password}/>
          </div>
          <div>
            <label>Email: </label><br />
            <input type="text" name="email" onChange={this.onChange} value={this.state.email}/>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
        </div>
    )
  }
}
postForm.propTypes = {
login: PropTypes.func.isRequired
};

export default connect(null, {login})(postForm);