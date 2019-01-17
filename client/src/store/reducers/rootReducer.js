import { combineReducers } from 'redux'

import authReducer from './authReducer'
import errorReducer from './errorReducer'
import metaReducer from './metaReducer'


const rootReducer = combineReducers({
    auth: authReducer,
    error: errorReducer,
    meta: metaReducer
})

export default rootReducer