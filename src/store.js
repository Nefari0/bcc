import { createStore, applyMiddleware, combineReducers } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './ducks/userReducer'
import productsReducer from './ducks/productsReducer'

const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer
})

export default createStore(
    rootReducer, 
    // composeWithDevTools(applyMiddleware(promiseMiddleware))
    applyMiddleware(promiseMiddleware)
    

)
