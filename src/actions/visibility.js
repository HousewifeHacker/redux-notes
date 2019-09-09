// constants
export const SHOW_VALID = 'SHOW_VALID';
export const VISIBILITY_FILTERS = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_VALID: SHOW_VALID,
    SHOW_DONE: 'SHOW_DONE',
};

// action creators
export function setVisibility(filter=SHOW_VALID) {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter: filter || SHOW_VALID,
    };
};

