import jsonPlacehoder from '../Api/jsonPlacehoder';

export const fetchPosts = () => {
  const response = await jsonPlacehoder.get('/posts');
  return {
    type: 'FETCH_POSTS'
  };
};
