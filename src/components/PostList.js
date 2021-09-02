import React from 'react';
import PropTypes from 'prop-types';
import Post from "./Post"

function PostList(props) {
  const { postList } = props;
  return (
    <React.Fragment>
      <hr/>
      {postList.map(post =>
        <Post
          userName={post.userName}
          message={post.message}
          dateTime={post.dateTime}
          voteTotal={post.voteTotal}
          postId={post.postId}
          key={post.postId}
        />
      )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.array
};

export default PostList;