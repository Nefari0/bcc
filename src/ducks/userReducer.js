
import axios from 'axios'

const initialState = {
    user1:'this is user',
    user: [],
  }
  
//   const REGISTER_USER
  const LOGIN_USER = 'LOGIN_USER'
  const SEND_USER_INFO = 'SEND_USER_INFO'
  const LOGOUT = 'LOGOUT'
  
  //* ACTION CREATORS

  export function login(params) {
    
  }

  export function getUserInfo(user) {
    //   console.log('this is from redux',user)
    return {
      type: LOGIN_USER,
      payload: user,
    }
  }

  export function sendUserInfo(){
      const { username } = initialState.user
      return {
          type: SEND_USER_INFO,
          payload: initialState.user
      }
  }
  
  export function logout() {
    return {
      type: LOGOUT,
    }
  }
  
  //* REDUCER FUNCTION
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case LOGIN_USER:
          // console.log('this is from redux',action)
        return { ...state, username: action.payload, isLoggedIn: true }
      case SEND_USER_INFO:
          // console.log('this is action from send user', state)
        return state 
      case LOGOUT:
        return initialState
      default:
        return state
    }
  }
  