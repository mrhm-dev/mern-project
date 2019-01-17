import * as ActionTypes from './actionTypes'

export const setLoadingState = loadingState => ({
    type: ActionTypes.LOADING,
    payload: {isLoading: loadingState}
})

export const setToastMessage = toastMessage => ({
    type: ActionTypes.SET_TOAST_MESSAGE,
    payload: {toastMessage: toastMessage ? toastMessage : ''}
})