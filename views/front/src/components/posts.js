import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getUser} from '../actions/postActions';
import {getUserName} from '../actions/postActions';
import PropTypes from "prop-types";

class Posts extends React.Component {

  //intialize fetch action
  componentWillMount() {
      this.props.getUser();
      this.props.getUserName('dasd');
 
    }
    componentDidMount(){
    }
    render() {
          return ( 
         <div>
          <h1>Username: {this.props.user}</h1><br />
          <h2>SearchById: </h2>
            name: {
              this.props.posts.name
            } < br />
            password: {
              this.props.posts.password
            } < br />
            sequence: {
              this.props.posts.v
            } < br />
            id: {
              this.props.posts._id
            } 
<div>
      <h2>SearchByName: </h2>
            name: {
              this.props.name.name
            } < br />
            password: {
              this.props.name.password
            } < br />
            sequence: {
              this.props.name.v
            } < br />
            email: {
              this.props.name.email
            } < br />
            id: {
              this.props.name._id
            } 
</div>
           </div>

          );
        }
      }
      Posts.propTypes = {
       getUser: PropTypes.func.isRequired,
       getUserName: PropTypes.func.isRequired,
       posts: PropTypes.object.isRequired,
       login: PropTypes.object,
       user: PropTypes.string
      }

    let check = {
      ifString: function(state) {
        if (typeof state.posts.item === 'string' ) return state.posts.item
        else return null
    },
      ifObj: function(state) {
      if (typeof state.posts.item === 'object' ) return state.posts.item
      else return null
    }
  }
    

const mapStateToProps = state => ({
  posts: state.posts.items,
  name: state.posts.name,
  login: check.ifObj(state),
  user: check.ifString(state)
});      
export default connect(mapStateToProps, { getUser, getUserName })(Posts);