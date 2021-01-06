import React, { Component } from 'react';
import './app.css';
import Navbar from './components/navbar';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class App extends Component {
  state = {
  }

  render() {
    return (
      <>
        <Navbar />
        <section>
          <CarouselProvider
            naturalSlideHeight={60}
            naturalSlideWidth={50}
            totalSlides={3}
          >
            <Slider>
              <Slide index={0}>
                <img src="https://nimage.g-enews.com/phpwas/restmb_allidxmake.php?idx=5&simg=20191212085116099134a01bf698f17519719666.jpg" alt="greta" width="100%"/>
              </Slide>
              <Slide index={1}>
              <img src="https://news.kbs.co.kr/data/news/2020/11/01/20201101_VvVjEE.jpg" alt="greta" width="100%"/>
              </Slide>
              <Slide index={2}>I am the third Slide.</Slide>
            </Slider>
            <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
          </CarouselProvider>
        </section>
      </>
    );
  }
}

export default App;