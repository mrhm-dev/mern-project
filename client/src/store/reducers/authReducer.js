import * as ActionTypes from '../actions/actionTypes'

const init = {
    isAuthenticated: false,
    user: {}
}

const authReducer = (state = init, action) => {
    switch (action.type) {
        case ActionTypes.SET_USER: {
            return {
                user: action.payload.user,
                isAuthenticated: Object.keys(action.payload.user).length !== 0
            }
        }
        default: return state
    }
}

export default authReducer