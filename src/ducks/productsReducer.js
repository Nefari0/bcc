import axios from 'axios'

const initialState = {
    products:[],
    loading:true,
}

const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';

export function requestProducts() {
    const products = axios.get('/api/products/all')
    console.log('this is from the reducer',products)
    return { 
        type: REQUEST_PRODUCTS,
        payload:products,
    }
}

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_PRODUCTS + '_PENDING':
            return {...state,loading:true}

        case REQUEST_PRODUCTS + '_FULLFILED':
            return { ...state, loading: false, product: action.payload.data }

        case REQUEST_PRODUCTS + '_REJECTED':
            return {...state, loading: false }
        
        default:
            return state;

    }
}