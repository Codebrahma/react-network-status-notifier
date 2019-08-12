# react-network-status-notifier

A simple React component to notify whenever your application status changes from **Online** to **Offline** or vice-versa.

![Demo](https://media.giphy.com/media/H0nVZ6316wwMRMWf5P/giphy.gif)

## Installation

Install it from npm and import it in your root component

```bash
npm install --save react-network-status-notifier
```

## Usage

```Javascript
import React from 'react';
import HideNSeek from 'react-network-status-notifier';

function App() {
    return (
        <div>
            <HideNSeek />
            <div>This is a test application</div>
        </div>
    )
}

export default App;
```
