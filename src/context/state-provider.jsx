import {BlogContext} from "./blog-context.js";
import {useEffect, useReducer} from "react";
import {initialState, updateState} from "../state/events.js";

export function StateProvider({ children }) {
  const [state, dispatch] = useReducer(updateState, initialState);

  function dispatchLog(action) {
    console.log(`%c ${action.type}:`, 'color: red', action.payload );
    dispatch(action);
  }

  useEffect(() => {
    console.log('%cNew state', 'color: green', state);
  }, [state]);

  return (
      <BlogContext.Provider value={{state, dispatch: dispatchLog }}>
        {children}
      </BlogContext.Provider>
  )
}
