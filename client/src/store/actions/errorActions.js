import * as ActionTypes from './actionTypes'

export const catchError = error => ({
    type: ActionTypes.CATCH_ERROR,
    payload: {error: error? error: {} }
})