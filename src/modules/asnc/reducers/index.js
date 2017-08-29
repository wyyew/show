import { combineReducers } from 'redux';
import {
  REQUEST_POSTS,RECEIVE_POSTS,SELECT_REDDIT,INVALIDATE_REDDIT
} from '../actions';

function selectedReddit(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_REDDIT:
      return action.reddit
    default:
      return state
  }
}

function postsstate({
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch(action.type) {
    case INVALIDATE_REDDIT:
      return Object.assing({}, state, {
        didInvalidate:true,
      });
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate:false,
      });
    case RECEIVE_POSTS:
      return  { ...state,
        isFetching:false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}

function postsByReddit(state = { }, action) {
  switch (action.type) {
    case INVALIDATE_REDDIT:
    case REQUEST_POSTS:
    case RECEIVE_POSTS:
      return Object.assign(...state, {
        [action.reddit]: posts(state[action.reddit], action),
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  postsByReddit,
  selectedReddit,
})
