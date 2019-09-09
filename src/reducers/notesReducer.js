import { createReducer } from 'redux-starter-kit';
import { ADD_NOTE, REMOVE_NOTE } from '../actions/notes';

export default createReducer([], {
    [ADD_NOTE]: (notes, action) => {
        return [
            ...notes,
            {
                title: action.title,
                content: action.content,
                valid: true,
            }
        ];
    },

    [REMOVE_NOTE]: (notes, action) => {
        return notes.map(
            (note, index) => {
                if (index == action.id) {
                    return Object.assign({}, note, { valid: false });
                }
                return note;
            }
        );
    },
});
