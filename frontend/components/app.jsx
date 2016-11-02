import React from 'react';
import NavbarContainer from './navbar/navbar_container';

const App = ({ children }) => (
  <div>
    <header>
      <NavbarContainer/>
    </header>
    <video id="background-video" loop autoPlay>
    <source src="https://s3.amazonaws.com/goodanimesvideos/splash.mp4" />
    </video>
    {children}
  </div>
);

export default App;
