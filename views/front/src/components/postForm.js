import React, { Component } from 'react'

export default class extends Component {
constructor(props){
  super(props);
  this.state = {
     name: '',
     password: '',
     v: 0,
     userName:''
  };

  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
}
onChange(e) {
  this.setState({ [e.target.name]: e.target.value });
}
onSubmit(e) {
 e.preventDefault();
 var newState = this.state.v +1;
 this.setState({v: newState});
  var details = {
  'name': this.state.name,
  'password': this.state.password,
  'v': this.state.v
}
var formBody = [];
for (var property in details) {
var encodedKey = encodeURIComponent(property);
var encodedValue = encodeURIComponent(details[property]);
formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&");

fetch('http://localhost:5000/products/create', {
method: 'POST',
headers: {
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
},
body: formBody
}).then(res => res.json())
.then(res => {this.setState({userName: res})});
}

  render() {
    return (
      <div>
        <h1>User: {this.state.userName}</h1>
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
          <br />
          <button type="submit">Submit</button>
        </form>
        </div>
    )
  }
}
