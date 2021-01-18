import axios from 'axios'

const initialState = {
    loading:false,
    products:[]
}

const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';

export function requestProducts() {
    let products = axios.get('/api/products/all').then(res => res.data);
    return { 
        type: REQUEST_PRODUCTS,
        payload:products
    }
}

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_PRODUCTS + '_PENDING':
            return {...state,loading:true}

        case REQUEST_PRODUCTS + '_FULLFILED':
            return { loading: false, product: action.payload }
        
        default:
            return state;

    }
}