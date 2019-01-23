import Axios from 'axios'
import jwtDecode from 'jwt-decode'

import * as ActionTypes from './actionTypes'
import { setLoadingState, setToastMessage } from './metaActions'
import { catchError } from './errorActions'
import setAuthToken from '../../utils/setAuthToken'

export const register = (user, history) => dispatch => {
    dispatch(setLoadingState(true))
    Axios.post('/api/users/register', user)
        .then(({data}) => {
            dispatch(setLoadingState(false))
            dispatch(catchError())
            dispatch(setToastMessage(data.message))
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
        .then(({data}) => {
            dispatch(setLoadingState(false))
            dispatch(catchError())
            dispatch(setToastMessage(data.message))
        })
        .catch(error => {
            dispatch(setLoadingState(false))
            dispatch(catchError(error.response.data))
        })
}

export const login = (user, history) => dispatch => {
    dispatch(setLoadingState(true))
    Axios.post('/api/users/login', user)
        .then(({ data }) => {
            dispatch(setLoadingState(false))
            dispatch(catchError())
            dispatch(setToastMessage(data.message))
            // Save Token to Local Storage
            let token = data.token
            localStorage.setItem('auth_token', token)

            setAuthToken(token)

            const decode = jwtDecode(token)
            dispatch(setUser(decode))
            history.push('/')
        })
        .catch(error => {
            dispatch(setLoadingState(false))
            dispatch(catchError(error.response.data))
        })
}

export const logout = history => dispatch => {
    localStorage.removeItem('auth_token')
    setAuthToken()
    dispatch(setUser())
    history.push('/login')
}

export const setUser = user => {
    return {
        type: ActionTypes.SET_USER,
        payload: {user: user ? user : {}}
    }
}