import React from 'react';
import PostList from './Components/BlogAppRedux/PostList';

class BlogAppRedux extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: '2rem' }}>
        <PostList />
      </div>
    );
  }
}

export default BlogAppRedux;
