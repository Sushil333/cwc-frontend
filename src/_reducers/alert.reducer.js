import { alertConstants } from '../_constants';

export function alert(state = {}, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                variant: 'success',
                message: action.message
            };
        case alertConstants.ERROR:
            return {
                variant: 'danger',
                message: action.message
            };
        case alertConstants.CLEAR:
            return {};
        default:
            return state
    }
}