import React, { Component } from 'react'

export default class Governance extends Component {
  handleCloseModal = () => {
    this.props.onCloseModal();
  }

  handleScroll = (e) => {
    e.stopPropagation();
  }

  render() {
    return (
      <article className="modal" onClick={this.handleCloseModal} onScroll={this.handleScroll}>
        <header className="modal-header">
        <h1 className="modal-header-title">SK의 ESG 실천노력</h1>
        <h1 className="modal-header-subtitle">ESG와 관련해 SK 그룹이 해 온/해 나갈 것들</h1>
          <h2 className="modal-header-subtitle">Governance</h2>
          <p className="modal-text"></p>
          <img src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/%ED%96%89%EB%B3%B5%EA%B2%BD%EC%98%81.JPG?raw=true" alt="re100"/>
          <p className="modal-text">지배구조는 기업 리스크관리, 의사결정으로 기업 전체 활동에 영향을 미치기 때문에 굉장히 중요한 요소입니다.  투명하고 공정한 경영을 통해 다양한 이해관계자들의 믿음을 얻을 수 있는 것이죠. SK에서는 이렇게 중요한 지배구조 요소를 어떻게 실천하고 있는지 알아보겠습니다. 크게 기업의 목적, 이사회 구성, 지배구조헌장으로 나눌 수 있습니다.</p>
          <h2 className="modal-text-title">SK 그룹의 행복 경영</h2>
          <img src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/%EC%9D%B4%ED%95%B4%EA%B4%80%EA%B3%84%EC%9E%90.png?raw=true" alt="re100"/>
          <p className="modal-text"> SK는 경영철학인 SKMS의 개정을 통해 구성원과 이해관계자의 행복을 목적함수로 설정했습니다. 이를 통해 단순히 기업의 경제적 가치만을 좇는 것이 아니라, 구성원 및 이해관계자가 모두 함께 지속가능한 방향으로 나아가기를 목표로 합니다. SK의 구성원은 지속적 행복을 위해 모두 VWBE한 SUPEX를 추구하며 행복경영을 함께 실현하고 있습니다</p>
          <h2 className="modal-text-title">이사회 중심 경영</h2>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/%EC%9D%B4%EC%82%AC%ED%9A%8C%EA%B5%AC%EC%84%B1.JPG?raw=true" alt="re100"/>
          <p className="modal-text"> SK 그룹의 각 회사는 이사회 중심의 경영을 통해 대주주 및 경영진으로부터 독립성을 유지하고 있습니다. 지주회사인 SK주식회사에서는 크게 3개의 위원회가 있으며 거버넌스위원회, 감사위원회, 사외이사후보추천위원회로 구성되어 투명경영을 실천하고 있습니다.</p>
          <h2 className="modal-text-title">지배구조헌장</h2>
          <p className="modal-text"> 지주회사인 SK주식회사는 ‘기업지배구조헌장’을 제정하여 주주의 권리, 이사회와 감사위원회의 권한과 책임 등 지배구조에 대한 정보를 제공합니다. 더 나아가 회사 홈페이지를 통해 위원회 활동현황 및 ESG 등급 정보를 제공하며 공정한 경영을 추구합니다.</p>
          <h2 className="modal-text-title">ESG 평가등급</h2>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/esg%ED%8F%89%EA%B0%80%EB%93%B1%EA%B8%89.PNG?raw=true" alt="re100"/>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/esg%ED%8F%89%EA%B0%80%EB%93%B1%EA%B8%891.PNG?raw=true" alt="re100"/>
        </header>
      </article>
    )
  }
}
