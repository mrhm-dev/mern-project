import * as ActionTypes from '../actions/actionTypes'

const init = {
    isAuthenticated: false,
    user: {}
}

const authReducer = (state = init, action) => {
    switch (action.type) {
        case ActionTypes.SET_USER: {
            return {
                user: action.payload,
                isAuthenticated: Object.keys(action.payload).length !== 0
            }
        }
        default: return state
    }
}

export default authReducer