# react-network-status-notifier

A simple React component to notify whenever your application status changes from **Online** to **Offline** or vice-versa.

## Installation

Install it from npm and import it in your root component

```bash
npm install --save hide-n-seek
```

## Usage

```Javascript
import React from 'react';
import HideNSeek from 'hide-n-seek';

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

## Testing

Consider this example:

```Javascript
import React from 'react';
import HideNSeek from 'hide-n-seek';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          Welcome to HideNSeek test
        </header>

        <blockquote>
                <p><b>Open DevTools and GoTo "Applications" tab</b></p>
                <p><b>Click on the "Service Worker" tab</b></p>
                <p><b>Use the "Offline" checkbox to test the application.</b></p>
        </blockquote>

        {
            /*
                After including the component you can open DevTools and GoTo "Applications" tab
                Click on the "Service Worker" tab
                Use the "Offline" checkbox to test the application.
            */
        }
        <HideNSeek />

      </div>
    );
  }
}

export default App;
```

Put this component in your project and run the project.

After doing so, follow:

- Open DevTools (F12)
- Go to "Applications" tab
- Go to "Service Workers" tab
- Check/Uncheck the "Offline" checkbox multiple times to test the component
