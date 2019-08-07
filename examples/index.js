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
