import { createStore } from 'redux'
import userReducer from './ducks/userReducer'
import productsReducer from './ducks/productsReducer'

export default createStore(
    userReducer,
    

)
