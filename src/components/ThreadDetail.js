import React from 'react';
import PropTypes from 'prop-types';
import PostList from "./PostList";

function ThreadDetail(props) {
  const { thread, postList } = props;
  return (
    <React.Fragment>
      <h2>{thread.title}</h2>
      <h3>Votes: {thread.voteTotal} User Name: {thread.userName}</h3>
      <h4>{thread.dateTime}</h4>
      <p>{thread.message}</p>
      <PostList postList={postList}/>
    </React.Fragment>
  );
}

ThreadDetail.propTypes = {
  thread: PropTypes.object,
  postList: PropTypes.array
}

export default ThreadDetail;