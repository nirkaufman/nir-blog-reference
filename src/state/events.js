export const initialState = {
  user: null,
  posts: [],
  errorMsg: '',
  loading: false
}

export const ACTIONS = {
  SET_USER: 'SET_USER',
  LOAD_POSTS: 'LOAD_POSTS',
  ADD_POST: 'ADD_POST',
  REMOVE_POST: 'REMOVE_POST',
  EDIT_POST: 'EDIT_POST',
  SET_ERROR: 'SET_ERROR',
  SET_LOADER: 'SET_LOADER'
}

export function updateState(state, action) {

  switch (action.type) {

    case ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload
      }

    case ACTIONS.LOAD_POSTS:
      return {
        ...state,
        posts: action.payload
      }

    case ACTIONS.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }

    case ACTIONS.SET_ERROR:
      return {
        ...state,
        errorMsg: action.payload
      }

    case ACTIONS.SET_LOADER:
      return {
        ...state,
        loading: action.payload
      }

    default:
      return state;
  }
}

