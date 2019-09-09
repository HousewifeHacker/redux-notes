import { createStore } from 'redux';
import rootReducer from '../reducers/reducers';

let initialState = {
    notes: [
        { title: 'You are awesome', content: 'No, wait, I meant legendary!', valid: true },
        { title: 'Ooops', content: 'I was talking to myself', valid: true }
    ],
    visibility: 'SHOW_VALID'
};


export default createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
