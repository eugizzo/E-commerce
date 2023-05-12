import { combineReducers } from "redux";
import counterReducer from './reducerCount'

export const rootReducer = combineReducers({
    counter: counterReducer
  });

