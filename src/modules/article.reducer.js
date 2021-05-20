import configs from 'configs';
import { http } from 'helpers/index';

/**
 * Documents
 * @default defaultData
 */
const defaultState = []

export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_ARTICLES_OK = 'GET_ARTICLES_OK';
export const GET_ARTICLES_FAIL = 'GET_ARTICLES_FAIL';

export const getArticles = () => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      dispatch({ type: GET_ARTICLES });
      const data = getState().articles || null;

      if (data || data.length < 1) {
        const { api: { auth } } = configs;

        return http.get(auth).then(({ data }) => {
          dispatch({ type: GET_ARTICLES_OK, data: data.items });
          return resolve(data);
        }).catch(er => {
          dispatch({ type: GET_ARTICLES_FAIL, reason: er.toString() });
          return reject(er);
        });
      }
    });
  }
}

/**
 * Reducder
 */
// eslint-disable-next-line
export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_ARTICLES_OK:
      return action.data;
    default:
      return state;
  }
}