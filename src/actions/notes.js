import { createAction } from 'redux-starter-kit';

// constants
export const addNote = createAction('ADD_NOTE'); // title, content
export const removeNote = createAction('REMOVE_NOTE'); // id

