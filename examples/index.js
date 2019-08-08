import React from 'react';
import NetworkStateNotifier from 'react-network-status-notifier';

function App() {
  return (
    <div>
      <header>Welcome to NetworkStateNotifier test</header>

      <blockquote>
        <p>
          <b>Open DevTools and GoTo &quot;Applications&quot; tab</b>
        </p>
        <p>
          <b>Click on the &quot;Service Worker&quot; tab</b>
        </p>
        <p>
          <b>Use the &quot;Offline&quot; checkbox to test the application.</b>
        </p>
      </blockquote>

      {/*
          After including the component you can open DevTools
          and GoTo "Applications" tab
          Click on the "Service Worker" tab
          Use the "Offline" checkbox to test the application.
        */}
      <NetworkStateNotifier />
    </div>
  );
}

export default App
