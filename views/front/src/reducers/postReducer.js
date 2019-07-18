import { FETCH_POSTS, NEW_POSTS, FETCH_BY_NAME } from '../actions/types';

const initialState= {
items: {},
item: {},
name: {}
}

export default function(state=initialState, action) {
 switch(action.type) {
  case FETCH_POSTS:
   return {
     ...state,
     items: action.payload
   };
   case FETCH_BY_NAME:
   return {
     ...state,
     name: action.payload
   }
   case NEW_POSTS:
   return {
   ...state,
   item: action.payload
   }
  default: return state;
}
}