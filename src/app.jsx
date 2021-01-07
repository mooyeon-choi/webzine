import React, { Component } from 'react';
import './app.css';
import Card from './components/card';
import Environment from './components/environment';
import Governance from './components/governance';
import Implement from './components/implement';
import Navbar from './components/navbar';
import Social from './components/social';
import WhatIsESG from './components/whatIsESG';

class App extends Component {
  state = {
    openModalId: -1,
    cards: [
      {
        id: 0,
        src: "https://tendercapital.com/wp-content/uploads/2019/10/shutterstock_1464945407.jpg",
        alt: "what is ESG",
        title: "ESG란 무엇일까?",
        subtitle: "-	ESG의 시작과 배경",
        text: "최근에 사회적으로 핫한 개념으로 떠오른 ESG란 무엇일까요?"
      }, {
        id: 1,
        src: "https://github.com/mooyeon-choi/webzine/blob/main/src/images/re100.jpg?raw=true",
        alt: "실천사례 1",
        title: "SK의 ESG 실천노력",
        subtitle: "-	ESG와 관련해 SK 그룹이 해 온/해 나갈 것들",
        text: "SK에서는 환경과 관련하여 다양한 활동을 이어오고 있습니다. "
      }, {
        id: 2,
        src: "https://dimg.donga.com/a/600/0/90/5/wps/NEWS/IMAGE/2019/03/25/94654204.7.jpg",
        alt: "실천사례 2",
        title: "SK의 ESG 실천노력",
        subtitle: "- SK 에서 실행하고 있는 사회공헌 활동",
        text: "SK에서는 사회공헌을 위해 크게 3가지 활동을 하고있다."
      }, {
        id: 3,
        src: "https://github.com/mooyeon-choi/webzine/blob/main/src/images/governence-main.png?raw=true",
        alt: "실천사례 3",
        title: "SK의 ESG 실천노력",
        subtitle: "- 지배구조",
        text: " SK는 경영철학인 SKMS의 개정을 통해 구성원과 이해관계자의 행복을 목적함수로 설정했습니다. 이를 통해 단순히 기업의 경제적 가치만을 좇는 것이 아니라..."
      }, {
        id: 4,
        src: "https://www.businesspost.co.kr/news/photo/201911/20191122114448_189325.jpg",
        alt: "우리가 실천",
        title: "ESG, 우리는 무엇을 실천해야 할까",
        subtitle: "- 구성원 차원에서 할 수 있는 작은 아이디어들",
        text: "앞서서 ESG와 관련해서 사회적 가치를 창출하려는 기업의 실천사례와 결과수치들을 알아보았습니다. 자금 투자나 사업 추진과 같은 기업 단위의 정책들을..."
      },
    ],
  }

  handleOpenModal = (openModalId) => {
    this.setState({ openModalId });
  }

  handleCloseModal = () => {
    this.setState({ openModalId: -1 })
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="main-board">
          {this.state.cards.map(card => 
            <Card 
              key={card.id}
              card={card}
              onOpenModal={this.handleOpenModal}
            />
          )}
        </div>
        {this.state.openModalId === 0 && 
          <WhatIsESG 
            onCloseModal={this.handleCloseModal}
          />
        }
        {this.state.openModalId === 1 && 
          <Environment
            onCloseModal={this.handleCloseModal}
          />
        }
        {this.state.openModalId === 2 && 
          <Social
            onCloseModal={this.handleCloseModal}
          />
        }
        {this.state.openModalId === 3 && 
          <Governance
            onCloseModal={this.handleCloseModal}
          />
        }
        {this.state.openModalId === 4 && 
          <Implement
            onCloseModal={this.handleCloseModal}
          />
        }
      </>
    );
  }
}

export default App;