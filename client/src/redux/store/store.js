import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import initState from '../initstate/initstate';
import podsosReducer from '../reducers/podsosreducer';


const store = createStore(podsosReducer, initState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
