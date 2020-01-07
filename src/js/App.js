import React from 'react';

import Example from './components/Example.js';

const App = () => (
  <div className="app">
    <h1>Hello, I’m your app, using the minmal React app base.</h1>
    <p>
      Head over to <a href="//github.com/hankchizljaw/minimal-react-base">the repo</a> to find out more info.
    </p>
    <Example text="Hi, pal 👋" label="Click me" />
  </div>
);

export default App;
