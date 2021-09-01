import React from 'react';
import PropTypes from 'prop-types';
import Post from "./Post"

function PostList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.postList.map(post =>
        <Post
          title={post.title}
          userName={post.userName}
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

export default Post;