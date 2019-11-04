import jsonPlacehoder from '../Api/jsonPlacehoder';

export const fetchPosts = () => {
  return async function(dispatch, getState) {
    const response = await jsonPlacehoder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response });
  };
};
