import React, { Component } from 'react';
import './app.css';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    firstModalIsOpen: false,
    secondModalIsOpen: false,
    thirdModalIsOpen: false
  }

  openFirstModal = () => {
    this.setState({firstModalIsOpen: true})
  }

  closeFirstModal = () => {
    this.setState({firstModalIsOpen: false})
  }

  openSecondModal = () => {
    this.setState({secondModalIsOpen: true})
  }

  closeSecondModal = () => {
    this.setState({secondModalIsOpen: false})
  }

  openThirdModal = () => {
    this.setState({thirdModalIsOpen: true})
  }

  closeThirdModal = () => {
    this.setState({thirdModalIsOpen: false})
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
        {this.state.firstModalIsOpen && 
        <article className="articles" onClick={this.closeFirstModal}>
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
        {this.state.secondModalIsOpen && 
        <article className="articles" onClick={this.closeSecondModal}>
          <div>두번째 주제</div>
          <hr/>
          <h1>SK의 ESG 실천노력</h1>
          <h3>기업이 ESG를 강조하는 이유</h3>
          <p> "지구환경을 보존하고 미래세대에 더 풍요로운 세상을 물려주기 위해 기업의 역할과 경영의 새로운 원칙에 대한 근본적 고민이 필요하다. 기업이 경제적 가치만 고려했던 방식에서 벗어나 사회와 더불어 성장할 수 있도록 ESG를 기업경영에 고려해야 한다"</p>
          <h3>ESG와 관련해 SK 그룹이 해 온/해 나갈 것들</h3>
          <h4>Environment</h4>
          <p>E와관련된 부분에서 SK는 한국 최초로 RE100에 가입하였습니다. 
RE100이란, Renewable Energy, 즉 재생에너지를 2050년까지 소비전력의 100퍼센트의 비율로 사용하겠다고 선언한 글로벌 캠페인입니다. RE100은 수출 경쟁력과도 직결되어 sk의 글로벌 경쟁력을 확보 할 수 있는 중요한 요소중 하나입니다. 
</p>
          <p>수소관련- 주식회사/건설</p>
          <p>
sk주식회사는 친환경 에너지로 성장하고있는 수소사업에 본격적으로 진출하겠다고 선언했습니다. 에너지 관련회사인 sk innovation, sk e&s 등 관계사 인력으로 구성된 수소사업추진단을 신설하여 사업 추진전략을 실행할 예정입니다.
</p>
          <p>그렇다면 ESG가 우리 사회의 화두로 출현하게 된 이유는 무엇일까요?</p>
          <p>사람들이 ESG에 관심을 갖게 된 것은 점차 기업에게 기대하는 역할이 달라지고 있기 때문입니다. 더 이상 경제적, 재무적인 성과만으로 기업의 가치를 평가하지 않고, 기업은 사회적 책임을 다함으로써 우리가 직면하고 있는 사회적 문제들을 줄여 나가길 요구 받고 있습니다. 고객, 투자자, 정부 등 기업을 둘러싼 다양한 이해관계자들의 요구를 충족하여, 지속가능한 성장을 이루기 위해 비재무적 요소인 ESG가 우리 사회에 꼭 필요한 개념으로 자리잡기 시작한 것입니다.</p>
        </article>}

        {this.state.thirdModalIsOpen && 
        <article className="articles" onClick={this.closeThirdModal}>
          <div>세번째 주제</div>
          <hr/>
          <h1>ESG, 우리는 무엇을 실천해야 할까</h1>
          <h3>구성원 차원에서 할 수 있는 작은 아이디어들</h3>
          <p>앞서서 ESG와 관련해서 사회적 가치를 창출하려는 기업의 실천사례와 결과수치들을 알아보았습니다. 자금 투자나 사업 추진과 같은 기업 단위의 정책들을 보면서 조직의 구성원은 ESG 경영을 실천하기 어려운 것이 아니냐고 생각하기 쉽습니다. 하지만 조직의 단일 구성원도 얼마든지 사회적 가치를 창출할 수 있다는 사실을 알고 계신가요?</p>
          <p>대규모 투자가 필요한 ESG활동을 보면서 구성원은 이를 실천하기 어려운 것이라고 생각하기 쉽습니다. 하지만 단일 구성원 역시 얼마든지 사회적 가치를 창출할 수 있다는 사실!</p>
          <p>1.   청주시자원봉사센터, SK하이닉스와 겨울맞이 김장 나눔 행사</p>
          <p>24일 오전 11시 충북 청주 시 상당구 용암1동 행정복지센터 지하주차장에서 SK하이닉스와 함께 김장 나눔 행사를 진행했다.
이번 김장 나눔 행사로 김치 6300kg을 담가 지역 내 취약계층 630가구의 겨울나기를 지원한다.
특히 이번 행복김장나눔은 SK하이닉스에서 김장비용을 지정기탁하고 한범덕 청주시장을 비롯한 청주시 자원봉사자와 SK하이닉스 문유진 부사장과 임직원 등 총 50여 명이 함께했다.
</p>
          <p>2.   SK건설 신입사원, 연탄 나눔 봉사활동 실시</p>
          <p>이날 봉사활동에 참가한 SK건설 신입사원 35명은 연탄 1200장을 부암동 일대 저소득층 4가구에 직접 배달하고 인근 지역 환경 정화 활동을 실시했다.
SK건설은 사회적 책임을 다하고 나눔을 실천하는 기업문화를 몸소 체험할 수 있도록 지난 2005년부터 신입사원 교육 필수과정으로 사회공헌 활동을 실시해 오고 있다.
</p>
        </article>}

        <Navbar />
        <article className="main-board">
          <section className="carousel">
            <section id="first" className="carousel-item" onClick={this.openFirstModal}>
              <img className="slide-img" src="https://nimage.g-enews.com/phpwas/restmb_allidxmake.php?idx=5&simg=20191212085116099134a01bf698f17519719666.jpg" alt="greta"/>
              <div className="subtitle">ESG(Environment, Social, Governance)란 무엇일까?</div>
            </section>
            <section id="second" className="carousel-item" onClick={this.openSecondModal}>
              <img className="slide-img" src="https://news.kbs.co.kr/data/news/2020/11/01/20201101_VvVjEE.jpg" alt="second"/>
              <div className="subtitle">SK의 ESG 실천노력</div>
            </section>
            <section id="third" className="carousel-item" onClick={this.openThirdModal}>
              <img className="slide-img" src="https://t1.daumcdn.net/cfile/tistory/2701C938563AF31810" alt="third"/>
              <div className="subtitle">ESG, 우리는 무엇을 실천해야 할까</div>
            </section>
        </section>
        <section className="flex-box">
          <img 
            className="side-img" 
            onClick={this.openFirstModal}
            onMouseOver={this.firstSlide}
            src="https://nimage.g-enews.com/phpwas/restmb_allidxmake.php?idx=5&simg=20191212085116099134a01bf698f17519719666.jpg" 
            alt="greta" 
            width="100%"
          />
          <img 
            onClick={this.openSecondModal}
            onMouseOver={this.secondSlide}
            className="side-img" 
            src="https://news.kbs.co.kr/data/news/2020/11/01/20201101_VvVjEE.jpg" alt="greta" width="100%"/>
          <img 
            onClick={this.openThirdModal}
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