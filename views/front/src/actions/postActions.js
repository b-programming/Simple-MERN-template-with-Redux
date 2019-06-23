import { FETCH_POSTS, NEW_POSTS } from './types';

export const getUser = () => dispatch => {
  fetch('http://localhost:5000/products/5d082bb89501e113334e5c8e')
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
 
 fetch('http://localhost:5000/products/create', {
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