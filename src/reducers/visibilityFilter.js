import { VISIBILITY_FILTERS } from '../actions/visibility';

export default function visibilityFilter(visibility = VISIBILITY_FILTERS.SHOW_VALID, action) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return visibility;
    }
}
