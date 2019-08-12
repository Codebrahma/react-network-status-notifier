import React from "react";
import PropTypes from 'prop-types';

const Message = props => {

  const defaultStyles = {
    width: '100%',
    height: '50px',
    marginBottom: '20px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <div className={props.className} style={{ ...defaultStyles, ...props.style }}>
      {props.message}
    </div>
  );
};

Message.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  message: PropTypes.string.isRequired,
}

Message.defaultProps = {
  className: "",
  style: {},
  message: "",
}

export default Message;
