import React from "react";
import PropTypes from "prop-types";

import Message from "./components/message";

class NetworkStateNotifier extends React.Component {
  state = {
    checker: null,
    isOnline: navigator.onLine,
    messages: []
  };

  handleMessageAddition = () => {
    let messages = [...this.state.messages];
    if (!navigator.onLine) {
      messages.push(
        <Message
          message={this.props.offlineMessage}
          style={{
            ...this.props.messageStyles,
            backgroundColor: this.props.offlineColor
          }}
          className={this.props.messageClassName} />
      );
    } else {
      messages.push(
        <Message
          message={this.props.onlineMessage}
          style={{
            ...this.props.messageStyles,
            backgroundColor: this.props.onlineColor
          }}
          className={this.props.messageClassName} />
      );
    }
    this.setState({
      messages: messages
    });
  };

  handleMessageRemove = () => {
    this.setState({
      messages: this.state.messages.slice(1)
    });
  };

  handleChecker = () => {
    if (this.state.isOnline !== navigator.onLine) {
      this.handleMessageAddition();
      this.setState(
        {
          isOnline: navigator.onLine
        },
        () => {
          setTimeout(
            this.handleMessageRemove,
            this.props.notificationTimeout
          );
        }
      );
    }
  };

  componentDidMount() {
    if (!this.state.checker) {
      let checker = setInterval(
        this.handleChecker, 
        this.props.pollInterval
      );
      this.setState({
        checker: checker
      });
    }
  }

  componentWillUnmount() {
    if (this.state.checker) {
      clearInterval(this.state.checker);
    }
  }

  render() {
    const defaultStyles = {
      position: "absolute",
      width: "200px",
      top: "10px",
      left: "50%",
      marginLeft: "-100px"
    };

    return (
      <div
        style={{ 
          ...defaultStyles,
          ...this.props.containerStyles
        }}
        className={this.props.containerClassName}>
        {this.state.messages}
      </div>
    );
  }
}

NetworkStateNotifier.propTypes = {
  containerStyles: PropTypes.object,
  messageStyles: PropTypes.object,
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
  onlineColor: "rgba(0,255,0,0.7)",
  offlineColor: "rgba(255,0,0,0.7)",
  containerClassName: "",
  messageClassName: "",
  onlineMessage: "You're online",
  offlineMessage: "You're offline",
  pollInterval: 400,
  notificationTimeout: 3000,
};

export default NetworkStateNotifier;
