import React from "react";
import PropTypes from "prop-types";

import Message from "./components/message";

class Notifier extends React.Component {
  state = {
    checker: null,
    isOnline: navigator.onLine,
    messages: []
  };

  handleMessageAddition = () => {
    let messages = [...this.state.messages];
    if (!navigator.onLine) {
      messages.push(
        <Message message="You're offline" color={this.props.offlineColor} />
      );
    } else {
      messages.push(
        <Message message="You're online" color={this.props.onlineColor} />
      );
    }
    this.setState({
      messages: messages
    });
  };

  handleMessageRemove = () => {
    let messages = [...this.state.messages];
    this.setState({
      messages: messages.slice(1)
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
          setTimeout(this.handleMessageRemove, 3000);
        }
      );
    }
  };

  componentDidMount() {
    if (!this.state.checker) {
      let checker = setInterval(this.handleChecker, 400);
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
      <div style={{ ...defaultStyles, ...this.props.style }}>
        {this.state.messages}
      </div>
    );
  }
}

Notifier.propTypes = {
  style: PropTypes.object,
  onlineColor: PropTypes.string,
  offlineColor: PropTypes.string
};

Notifier.defaultProps = {
  style: {},
  onlineColor: "rgba(0,255,0,0.7)",
  offlineColor: "rgba(255,0,0,0.7)"
};

export default Notifier;
