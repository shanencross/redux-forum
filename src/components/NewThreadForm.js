import React from "react";
import PropTypes from "prop-types";

function NewThreadForm(props) {
  return (
    <React.Fragment>
      <form>
        <input
          type="text"
          name="userName"
          placeholder="Username"
          required
        />
        <br/>
        <input
          type="text"
          name="title"
          placeholder="Thread title"
          required
        />
        <br/>
        <button type="submit">Submit!</button>
      </form>
    </React.Fragment>
  );
}

NewThreadForm.propTypes = {
  buttonText: PropTypes.string
};

export default NewThreadForm;