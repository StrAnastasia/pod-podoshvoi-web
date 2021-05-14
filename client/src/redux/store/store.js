import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import initState from '../initstate/initstate';
import podsosReducer from '../reducers/podsosreducer';


const store = createStore(podsosReducer, initState, composeWithDevTools());

export default store;
