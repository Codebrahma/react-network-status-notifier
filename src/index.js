import React from 'react';
import Message from './components/message';

class HideNSeek extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hideNSeekChecker: null,
            hideNSeekIsOnline: true,
            hideNSeekMessages: []
        }
    }

    componentDidMount() {
        if(!this.state.hideNSeekChecker) {
            let checker = setInterval(() => {
                if(this.state.hideNSeekIsOnline !== navigator.onLine) {
                    let messages = [...this.state.hideNSeekMessages]
                    if(!navigator.onLine) {
                        messages.push(<Message message="You're offline" color="rgba(255,0,0,0.5)"/>)
                    } else {
                        messages.push(<Message message="You're online" color="rgba(0,255,0,0.5)"/>)
                    }
                    this.setState({
                        hideNSeekIsOnline: navigator.onLine,
                        hideNSeekMessages: messages
                    }, () => {
                        setTimeout(() => {
                            let messages = [...this.state.hideNSeekMessages]
                            console.log(messages.length);
                            this.setState({
                                hideNSeekMessages: messages.slice(1)
                            })
                        }, 3000)
                    })
                }
            }, 400);
            this.setState({
                hideNSeekChecker: checker
            })
        }
    }

    componentWillUnmount() {
        if(this.state.hideNSeekChecker) {
            clearInterval(this.state.hideNSeekChecker)
        }
    }

    render() {
        return <div style={{ position: 'absolute', width: '200px', top: '10px', left: '50%', marginLeft: '-100px' }}>
            {this.state.hideNSeekMessages}
        </div>
    }
}

export default HideNSeek;