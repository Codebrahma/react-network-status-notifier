import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
  const { style, message, className } = props;

  const defaultStyles = {
    width: '100%',
    height: '50px',
    marginBottom: '20px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className={className} style={{ ...defaultStyles, ...style }}>
      {message}
    </div>
  );
};

Message.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.object),
  message: PropTypes.string,
};

Message.defaultProps = {
  className: '',
  style: {},
  message: '',
};

export default Message;
