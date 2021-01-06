import React, { Component } from 'react';
import './app.css';
import ImgBoard from './components/imgBoard';
import Navbar from './components/navbar';
import TextBoard from './components/textBoard';

class App extends Component {
  state = {
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="flexbox">
          <ImgBoard />
          <TextBoard />
        </div>
      </>
    );
  }
}

export default App;
