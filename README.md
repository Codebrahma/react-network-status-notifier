# react-network-status-notifier

![NPM Version](https://img.shields.io/badge/npm-1.0.0-blue) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Codebrahma/react-network-status-notifier?color=green) ![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/Codebrahma/react-network-status-notifier?color=orange)

🔔 Simple React component to notify whenever your application status changes from **Online** to **Offline** or vice-versa.

<img src="demo.gif" width="800px" />

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
