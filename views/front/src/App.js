import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Posts from './components/posts.js';
import PostForm from './components/postForm.js';
import store from './store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <PostForm />
       <Posts />
    </div>
    </Provider>
  );
}

export default App;
