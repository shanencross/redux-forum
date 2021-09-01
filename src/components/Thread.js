import React from 'react';
import PropTypes from 'prop-types';

function Thread(props) {
  return (
    <React.Fragment>
      <h3>{props.title} | Votes: {props.voteTotal} </h3>
      <p>by {props.userName} | {props.dateTime}</p>
    </React.Fragment>
  );
}

Thread.propTypes = {
  title: PropTypes.string,
  userName: PropTypes.string,
  dateTime: PropTypes.string,
  voteTotal: PropTypes.number,
  threadId: PropTypes.string,
};

export default Thread;