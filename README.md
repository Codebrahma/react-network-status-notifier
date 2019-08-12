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

## Customizations

**containerClassName**

The `containerClassName` prop is passed down to the container div which defines the sizing and positioning of the component.

```Javascript
<NetworkStateNotifier containerClassName="myContainerClassName" />
```

**messageClassName**

The `messageClassName` prop is passed down to the `Message` component that pop up each time the system goes online or offline.

```Javascript
<NetworkStateNotifier messageClassName="myMessageClassName" />
```

**containerStyles**

Would work with the same component as of `containerClassName` but receives an object of styles instead. The default Styles are added and this prop is not mandatory.

```Javascript
/* Display the message at the bottom of the screen instead of top */
<NetworkStateNotifier containerStyles={{ bottom: 0 }} />
```

**messageStyles**

Would work with the same component as of `messageClassName` but receives an object of styles instead. The default Styles are added and this prop is not mandatory.

```Javascript
/* Example: Configure size and font of the message displayed */
<NetworkStateNotifier messageStyles={{ width: '500px', fontFamily: 'cursive' }} />
```

**onlineColor**

Passed color will be the background of the message when the device goes from offline to online. Default `rgba(0,255,0,0.7)`

```Javascript
<NetworkStateNotifier onlineColor="green" />
```

**offlineColor**

Passed color will be the background of the message when the device goes from online to offline. Default `rgba(255,0,0,0.7)`

```Javascript
<NetworkStateNotifier offlineColor="red" />
```

**onlineMessage**

Passed message will be shown when the device geos from offline to online. Default `You're online`

**offlineMessage**

Passed message will be shown when the device geos from online to offline. Default `You're offline`

**checkInterval**

Takes an integer and let's you manage the interval after which the check for online and offline should be made. Default `400`

```Javascript
<NetworkStateNotifier checkInterval={1000} />
```

**hideMessageAfter**

This will allow you to control for how long the display message should persist on the screen.

```Javascript
/* The message will disappear after a second */
<NetworkStateNotifier hideMessageAfter={1000} />
```
