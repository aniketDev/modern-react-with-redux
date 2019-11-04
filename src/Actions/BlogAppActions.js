import jsonPlacehoder from '../Api/jsonPlacehoder';

export const fetchPosts = async () => {
  const response = await jsonPlacehoder.get('/posts');
  return {
    type: 'FETCH_POSTS'
  };
};
