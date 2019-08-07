import React from 'react';
import './message.css';

const Message = (props) => {
    return (
        <div className="HideNSeek-message" style={{ backgroundColor: props.color }}>
            {props.message}
        </div>
    );
};

export default Message;