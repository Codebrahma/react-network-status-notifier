# react-network-status-notifier

A simple React component to notify whenever your application status changes from **Online** to **Offline** or vice-versa.

![Demo](demo.gif)

## Installation

Install it from npm and import it in your root component

```bash
npm install --save react-network-status-notifier
```

## Usage

```Javascript
import React from 'react';
import NetworkStateNotifier from 'react-network-status-notifier';

function App() {
  return (
    <div>
      <NetworkStateNotifier />
      <div>This is a test application</div>
    </div>
  )
}

export default App;
```

## Props

Name                     |Type      |Description 
-------------------------|----------|-----------
**`containerClassName`** |`{String}`|The passed className is assigned to the outer container of the component.
**`messageClassName`**   |`{String}`|The passed className is assigned to each message block.
**`containerStyles`**    |`{Object}`|Styles assigned to the container of the component.
**`messageStyles`**      |`{Object}`|Styles assigned to the message block.
**`onlineColor`**        |`{String}`|Default: `rgba(0, 255, 0, 0.7)`. The background color of the message when online.
**`offlineColor`**       |`{String}`|Default: `rgba(0, 255, 0, 0.7)`. The background color of the message when offline.
**`onlineMessage`**      |`{String}`|Default: `You're online`. The actual message when device goes from online to offline.
**`offlineMessage`**     |`{String}`|Default: `You're offline`. The actual message when device goes from offline to online.
**`pollInterval`**       |`{Number}`|Default: `400`. Milliseconds after which the check for the online status should be made.
**`notificationTimeout`**|`{Number}`|Default: `3000`. Milliseconds after which the displayed message should disappear.
