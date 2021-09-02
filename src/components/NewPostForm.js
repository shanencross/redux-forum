import React from "react";
import PropTypes from "prop-types";

function NewPostForm(props) {
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
        <textarea 
          rows={6} 
          columns={50}
          name="message"
          placeholder="Message"
          required
        />
        <br/>
        <button type="submit">Submit!</button>
      </form>
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  buttonText: PropTypes.string
};

export default NewPostForm;