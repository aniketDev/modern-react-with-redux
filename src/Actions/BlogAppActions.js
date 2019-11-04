import jsonPlacehoder from '../Api/jsonPlacehoder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlacehoder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response });
};
