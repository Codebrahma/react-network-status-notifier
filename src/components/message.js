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
    fontFamily: 'inherit',
  }

  return (
    <div className="message" style={{ ...defaultStyles, backgroundColor: props.color }}>
      {props.message}
    </div>
  );
};

Message.propTypes = {
  color: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}

Message.defaultProps = {
  color: '#000',
  message: ''
}

export default Message;
