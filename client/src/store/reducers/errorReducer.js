import * as ActionTypes from '../actions/actionTypes'

const errorReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.CATCH_ERROR: {
            return action.payload.error
        }
        default: return state
    }
}

export default errorReducer