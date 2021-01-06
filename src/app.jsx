import React, { Component } from 'react';
import './app.css';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    modalIsOpen: false,
  }

  openModal = () => {
    this.setState({modalIsOpen: true})
  }

  closeModal = () => {
    this.setState({modalIsOpen: false})
  }

  firstSlide = () => {
    document.getElementById("first").style.zIndex = "1";
    document.getElementById("second").style.zIndex = "0";
    document.getElementById("third").style.zIndex = "0";
  }

  secondSlide = () => {
    document.getElementById("first").style.zIndex = "0";
    document.getElementById("second").style.zIndex = "1";
    document.getElementById("third").style.zIndex = "0";
  }

  thirdSlide = () => {
    document.getElementById("first").style.zIndex = "0";
    document.getElementById("second").style.zIndex = "0";
    document.getElementById("third").style.zIndex = "1";
  }

  render() {
    return (
      <>
        {this.state.modalIsOpen && 
        <article className="articles" onClick={this.closeModal}>
          <div>첫번째 주제</div>
          <hr/>
          <h1>ESG(Environment, Social, Governance)란 무엇일까?</h1>
          <h3>ESG의 시작과 배경</h3>
          <section>
            <img src="https://nimage.g-enews.com/phpwas/restmb_allidxmake.php?idx=5&simg=20191212085116099134a01bf698f17519719666.jpg" alt="greta"/>
          </section>
          <p> 최근에 사회적으로 핫한 개념으로 떠오른 ESG란 무엇일까요?</p>
          <p>ESG란 기존에 재무적 성과만을 추구하던 기업들이 지속가능한 성장을 이루기 위해 고려하기 시작한 비재무적 요소들입니다. 각각 Environment, Social, Governance의 줄임말로, 우리말로 바꾸면 환경, 사회, 지배구조와 관련된 개념이라고 할 수 있습니다. 환경 측면에는 기후변화 영향, 친환경 제품 개발 등의 요소를 꼽을 수 있으며, 사회 측면에는 공정한 채용, 산업안전, 공정한 경쟁 등의 요소가 있고, 마지막으로 지배구조의 측면에는 주주 권리 실현, 이사회 투명성 등을 고려하게 됩니다.</p>
          <p>그렇다면 ESG가 우리 사회의 화두로 출현하게 된 이유는 무엇일까요?</p>
          <p>사람들이 ESG에 관심을 갖게 된 것은 점차 기업에게 기대하는 역할이 달라지고 있기 때문입니다. 더 이상 경제적, 재무적인 성과만으로 기업의 가치를 평가하지 않고, 기업은 사회적 책임을 다함으로써 우리가 직면하고 있는 사회적 문제들을 줄여 나가길 요구 받고 있습니다. 고객, 투자자, 정부 등 기업을 둘러싼 다양한 이해관계자들의 요구를 충족하여, 지속가능한 성장을 이루기 위해 비재무적 요소인 ESG가 우리 사회에 꼭 필요한 개념으로 자리잡기 시작한 것입니다.</p>
        </article>}
        <Navbar />
        <article className="main-board">
          <section className="carousel">
            <section id="first" className="carousel-item" onClick={this.openModal}>
              <img className="slide-img" src="https://nimage.g-enews.com/phpwas/restmb_allidxmake.php?idx=5&simg=20191212085116099134a01bf698f17519719666.jpg" alt="greta"/>
              <div className="subtitle">ESG(Environment, Social, Governance)란 무엇일까?</div>
            </section>
            <section id="second" className="carousel-item">
              <img className="slide-img" src="https://news.kbs.co.kr/data/news/2020/11/01/20201101_VvVjEE.jpg" alt="second"/>
              <div className="subtitle">SK의 ESG 실천노력</div>
            </section>
            <section id="third" className="carousel-item">
              <img className="slide-img" src="https://t1.daumcdn.net/cfile/tistory/2701C938563AF31810" alt="third"/>
              <div className="subtitle">ESG, 우리는 무엇을 실천해야 할까</div>
            </section>
        </section>
        <section className="flex-box">
          <img 
            className="side-img" 
            onMouseOver={this.firstSlide}
            src="https://nimage.g-enews.com/phpwas/restmb_allidxmake.php?idx=5&simg=20191212085116099134a01bf698f17519719666.jpg" 
            alt="greta" 
            width="100%"
          />
          <img 
            onMouseOver={this.secondSlide}
            className="side-img" 
            src="https://news.kbs.co.kr/data/news/2020/11/01/20201101_VvVjEE.jpg" alt="greta" width="100%"/>
          <img 
            onMouseOver={this.thirdSlide}
            className="side-img" 
            src="https://t1.daumcdn.net/cfile/tistory/2701C938563AF31810" alt="greta" width="100%"/>
        </section>
        </article>
      </>
    );
  }
}

export default App;