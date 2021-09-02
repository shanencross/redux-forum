import React from 'react';
import PropTypes from 'prop-types';
import Thread from "./Thread"

function ThreadList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.threadList.map(thread =>
        <Thread
          title={thread.title}
          userName={thread.userName}
          dateTime={thread.dateTime}
          voteTotal={thread.voteTotal}
          threadId={thread.threadId}
          key={thread.threadId}
        />
      )}
    </React.Fragment>
  );
}

ThreadList.propTypes = {
  threadList: PropTypes.array
};

export default ThreadList;