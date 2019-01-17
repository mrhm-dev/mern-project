import * as ActionTypes from '../actions/actionTypes'

const init = {
    isLoading: false,
    toastMessage: 'A Demo Toast Message'
}

const metaReducer = (state = init, action) => {
    switch (action.type) {
        case ActionTypes.LOADING: {
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        }
        case ActionTypes.SET_TOAST_MESSAGE: {
            return {
                ...state,
                toastMessage: action.payload.toastMessage
            }
        }
        default: return state
    }
}

export default metaReducer