import React from 'react';
import PropTypes from 'prop-types';

import Message from './components/message';

const inBrowser = typeof navigator !== 'undefined';
const unsupportedUserAgentsPattern = /Windows.*Chrome|Windows.*Firefox|Linux.*Chrome/;
const pollingURL = 'https://ipv4.icanhazip.com/';

class NetworkStateNotifier extends React.Component {
  state = {
    checker: null,
    isOnline:
      inBrowser && typeof navigator.onLine === 'boolean'
        ? navigator.onLine
        : undefined,
    messages: [],
    polling:
      inBrowser && unsupportedUserAgentsPattern.test(navigator.userAgent),
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
      this.setState({
        checker: null,
      });
    }
  }

  handleMessageAddition = () => {
    const { messages, isOnline } = this.state;
    const {
      offlineMessage,
      offlineColor,
      messageClassName,
      messageStyles,
      onlineMessage,
      onlineColor,
    } = this.props;
    
    messages.push(
      <Message
        message={isOnline ? offlineMessage : onlineMessage}
        style={{
          ...messageStyles,
          backgroundColor: isOnline ? offlineColor : onlineColor,
        }}
        className={messageClassName}
      />,
    );
    
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

  setIsOnline = (status) => {
    const { notificationTimeout } = this.props;
    const { isOnline } = this.state;

    if (isOnline === status) return;

    this.handleMessageAddition();
    this.setState(
      {
        isOnline: status,
      },
      () => {
        setTimeout(this.handleMessageRemove, notificationTimeout);
      },
    );
  };

  handleChecker = () => {
    const { polling, isOnline } = this.state;

    if (polling) {
      fetch(pollingURL, {}, 2000)
        .then((res) => { // eslint-disable-line
          if (!isOnline) {
            this.setIsOnline(true);
          }
        })
        .catch((err) => { // eslint-disable-line
          if (isOnline) {
            this.setIsOnline(false);
          }
        });
    } else if (isOnline !== navigator.onLine) {
      this.setIsOnline(navigator.onLine);
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
  containerStyles: PropTypes.instanceOf(Object),
  messageStyles: PropTypes.instanceOf(Object),
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
