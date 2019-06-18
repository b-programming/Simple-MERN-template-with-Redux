import React, {Component} from 'react';
import { connect } from 'react-redux';
import {login} from '../actions/postActions';
import PropTypes from "prop-types";

class Posts extends React.Component {
    
  //intialize fetch action
  componentWillMount() {
      this.props.login();
      
    }
    render() {
          return ( 
         
         <div>
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
           </div>

          );
        }
      }
//fix posts array/object changing
      Posts.propTypes = {
       login: PropTypes.func.isRequired,
       posts: PropTypes.object.isRequired
      }

const mapStateToProps = state => ({
  posts: state.posts.items
});      
export default connect(mapStateToProps, { login })(Posts);