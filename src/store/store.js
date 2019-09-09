import { configureStore } from 'redux-starter-kit';
import rootReducer from '../reducers/reducers';

let initialState = {
    notes: [
        { title: 'You are awesome', content: 'No, wait, I meant legendary!', valid: true },
        { title: 'Ooops', content: 'I was talking to myself', valid: true }
    ],
    visibility: 'SHOW_VALID'
};


export default configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
})
