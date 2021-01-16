import axios from 'axios'

const initialState = {
    loading:false,
    products:[]
}

const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';

export function requestProducts() {
    let product = axios.get('/api/products/all')
}

export default function productReducer(state = initialState, action) {
    return state
}