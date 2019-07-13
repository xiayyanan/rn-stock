import { LOGIN_HANDLER } from '../actions/types';
// reducer的作用: 返回新的状态

const initialState = {
  user:{
    name:"Melody16688",
    avatar:require('../../static/images/avatar/avatar-1.jpg'),
    isAuth:false,
    isLogin:true
  }
  
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_HANDLER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}