import React from 'react';
import PropTypes from 'prop-types';

import Message from './components/message';

class NetworkStateNotifier extends React.Component {
  state = {
    checker: null,
    isOnline: navigator.onLine,
    messages: [],
  };

  componentDidMount() {
    const { checker } = this.state;
    const { pollInterval } = this.props;

    if (!checker) {
      const newChecker = setInterval(this.handleChecker, pollInterval);
      this.setState({
        checker: newChecker,
      });
    }
  }

  componentWillUnmount() {
    const { checker } = this.state;
    if (checker) {
      clearInterval(checker);
    }
  }

  handleMessageAddition = () => {
    const { messages } = this.state;
    const {
      offlineMessage,
      offlineColor,
      messageClassName,
      messageStyles,
      onlineMessage,
      onlineColor,
    } = this.props;
    if (!navigator.onLine) {
      messages.push(
        <Message
          message={offlineMessage}
          style={{
            ...messageStyles,
            backgroundColor: offlineColor,
          }}
          className={messageClassName}
        />
      );
    } else {
      messages.push(
        <Message
          message={onlineMessage}
          style={{
            ...messageStyles,
            backgroundColor: onlineColor,
          }}
          className={messageClassName}
        />
      );
    }
    this.setState({
      messages,
    });
  };

  handleMessageRemove = () => {
    const { messages } = this.state;
    this.setState({
      messages: messages.slice(1),
    });
  };

  handleChecker = () => {
    const { isOnline } = this.state;
    const { notificationTimeout } = this.props;

    if (isOnline !== navigator.onLine) {
      this.handleMessageAddition();
      this.setState(
        {
          isOnline: navigator.onLine,
        },
        () => {
          setTimeout(this.handleMessageRemove, notificationTimeout);
        }
      );
    }
  };

  render() {
    const defaultStyles = {
      position: 'absolute',
      width: '200px',
      top: '10px',
      left: '50%',
      marginLeft: '-100px',
    };

    const { messages } = this.state;
    const { containerStyles, containerClassName } = this.props;

    return (
      <div
        style={{
          ...defaultStyles,
          ...containerStyles,
        }}
        className={containerClassName}
      >
        {messages}
      </div>
    );
  }
}

NetworkStateNotifier.propTypes = {
  containerStyles: PropTypes.objectOf(PropTypes.object),
  messageStyles: PropTypes.objectOf(PropTypes.object),
  onlineColor: PropTypes.string,
  offlineColor: PropTypes.string,
  containerClassName: PropTypes.string,
  messageClassName: PropTypes.string,
  onlineMessage: PropTypes.string,
  offlineMessage: PropTypes.string,
  pollInterval: PropTypes.number,
  notificationTimeout: PropTypes.number,
};

NetworkStateNotifier.defaultProps = {
  containerStyles: {},
  messageStyles: {},
  onlineColor: 'rgba(0,255,0,0.7)',
  offlineColor: 'rgba(255,0,0,0.7)',
  containerClassName: '',
  messageClassName: '',
  onlineMessage: "You're online",
  offlineMessage: "You're offline",
  pollInterval: 400,
  notificationTimeout: 3000,
};

export default NetworkStateNotifier;
