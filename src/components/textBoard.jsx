import React, { Component } from 'react';
import ShortExplan from './shortExplan';


class TextBoard extends Component {
  state = {
    explanations: [
      {
        id: 1,
        title: "ESG(Environment, Social, Governance)란 무엇일까?",
        text: "ESG의 시작과 배경/ 준택"
      },
      {
        id: 2,
        title: "SK의 ESG 실천사례",
        text: "기업이 ESG를 강조하는 이유"
      },
      {
        id: 3,
        title: "실천사례의 수치화된 자료",
        text: "ESG와 관련해 SK 그룹이 해 온/해 나갈 것들"
      },
      {
        id: 4,
        title: "ESG, 우리는 무엇을 실천해야 할까(계획)",
        text: "지속가능경영보고서 참고(회사 홈페이지)"
      }
    ]
  }
  render() {
    return (
      <div className="text-board">
        {this.state.explanations.map(explanation =>
          <ShortExplan explanation={explanation}/>
        )}
      </div>
    );
  }
}

export default TextBoard;