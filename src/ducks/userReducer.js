import { useReducer } from "react"

const initialState = {
    loading:false,
    users:[]
}

const REQUEST_USERS = 'REQUEST_USERS';

// export function requestUsers(params) {
//     let users = axios.get('/')
// }

export default function userReducer(state = initialState, action) {
    return state
}