import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../Actions/BlogAppActions';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return <div>postlist</div>;
  }
}

export default connect(
  null,
  { fetchPosts: fetchPosts }
)(PostList);
