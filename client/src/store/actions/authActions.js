import Axios from 'axios'

import * as ActionTypes from './actionTypes'
import { setLoadingState, setToastMessage } from './metaActions'
import { catchError } from './errorActions'

export const register = (user, history) => dispatch => {
    dispatch(setLoadingState(true))
    Axios.post('/api/users/register', user)
        .then(res => {
            dispatch(setLoadingState(false))
            dispatch(catchError())
            dispatch(setToastMessage(res.data.message))
            history.push('/registration-success')
        })
        .catch(error => {
            dispatch(setLoadingState(false))
            dispatch(catchError(error.response.data))
        })
}

export const activateAccount = token => dispatch => {
    dispatch(setLoadingState(true))
    Axios.get(`/api/users/activateaccount/${token}`)
        .then(res => {
            dispatch(setLoadingState(false))
            dispatch(catchError())
            dispatch(setToastMessage(res.data.message))
        })
        .catch(error => {
            dispatch(setLoadingState(false))
            dispatch(catchError(error.response.data))
        })
}