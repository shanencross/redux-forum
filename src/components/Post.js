import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return (
    <React.Fragment>
      <h3>Votes: {props.voteTotal} User Name: {props.userName}</h3>
      <h4>{props.dateTime}</h4>
      <p>{props.message}</p>
      <hr/>
    </React.Fragment>
  )
}

Post.propTypes = {
  userName: PropTypes.string,
  message: PropTypes.string,
  dateTime: PropTypes.string,
  threadId: PropTypes.string,
  postId: PropTypes.string,
  voteTotal: PropTypes.number
}

export default Post;