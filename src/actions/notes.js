import { createAction } from 'redux-starter-kit';

// constants
export const ADD = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

// action creators
export function addNote(title, content) {
    return { type: ADD_NOTE, title: title, content: content };
}

export function removeNote(id) {
    return { type: REMOVE_NOTE, id: id };
}
