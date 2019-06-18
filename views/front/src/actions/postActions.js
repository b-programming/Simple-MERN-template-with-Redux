import { FETCH_POSTS, NEW_POSTS } from './types';

export const login = () => dispatch => {
  fetch('http://localhost:5000/products/5d082bb89501e113334e5c8e')
    .then(res => res.json())
    .then(result => (dispatch({
        type: FETCH_POSTS,
        payload: result
    }), console.log(result)
  ));
}