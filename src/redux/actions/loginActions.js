import { LOGIN_HANDLER } from './types';
export const loginHandler = posts => dispatch => {
  dispatch({
    type: LOGIN_HANDLER,
    payload: posts
  })
}