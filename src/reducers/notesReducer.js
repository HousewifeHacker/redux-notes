import { createReducer } from 'redux-starter-kit';
import { addNote, removeNote } from '../actions/notes';

export default createReducer([], {
    [addNote]: (notes, action) => {
        return [
            ...notes,
            {
                title: action.payload.title,
                content: action.payload.content,
                valid: true,
            }
        ];
    },

    [removeNote]: (notes, action) => {
        return notes.map(
            (note, index) => {
                if (index == action.payload) {
                    return Object.assign({}, note, { valid: false });
                }
                return note;
            }
        );
    },
});
