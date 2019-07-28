import React from 'react';
import './App.scss';
import './assets/styles/theme.scss';

import user from './assets/json/user.json';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Work from './components/Work/Work';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Banner user={user} />
      <About user={user} />
      <Work user={user} />
      <Skills user={user} />
      <Portfolio user={user} />
    </div>
  );
}

export default App;
