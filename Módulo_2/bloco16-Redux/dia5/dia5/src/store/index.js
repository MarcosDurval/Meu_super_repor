import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import clickReducer from '../reducers';
const rootreducer = combineReducers({clickReducer});

const store = createStore(rootreducer,composeWithDevTools())

export default store
