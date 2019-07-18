import { FETCH_POSTS, NEW_POSTS, FETCH_BY_NAME } from './types';
var url = require('url');

export const getUserName = (name) => dispatch => {
  const myURL = new URL(name, 'http://localhost:5000/home/login/id/'); 
  fetch(myURL)
     .then(res => res.json())
     .then(res =>   dispatch({
         type: FETCH_BY_NAME,
         payload: res[0]
     })
     //console.log(res)
   );
 }

 export const getUser = () => dispatch => {
 fetch('http://localhost:5000/home/login/5d2b84b92be9c2277464d9c2')
    .then(res => res.json())
    .then(result => dispatch({
        type: FETCH_POSTS,
        payload: result
    })
  ); 
}

export const login = (details) => dispatch => {
 var formBody = [];
 for (var property in details) {
 var encodedKey = encodeURIComponent(property);
 var encodedValue = encodeURIComponent(details[property]);
 formBody.push(encodedKey + "=" + encodedValue);
 }
 formBody = formBody.join("&");
 
 fetch('http://localhost:5000/home/login/create', {
 method: 'POST',
 headers: {
   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
 },
 body: formBody
 })
 .then(res => res.json())
 .then(res => dispatch({
  type: NEW_POSTS,
  payload: res
})
  );
}