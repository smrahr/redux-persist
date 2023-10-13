import { combineReducers } from '@reduxjs/toolkit'

export const counterReducer = (state=0, action) => {
    switch (action.type) {
        case "increment":
          return state + 1;
        case "decrement":
          return state - 1;
        default:
          return state;
      }
}

export const reducers = combineReducers({
    counter: counterReducer
})