import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './ducks/userReducer'
import productsReducer from './ducks/productsReducer'

const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer
})

export default createStore(
    rootReducer, 
    applyMiddleware(promiseMiddleware)
    

)
