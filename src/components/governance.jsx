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
        <h1 className="modal-header-title">ESG와 관련해 SK 그룹이 해 온/해 나갈 것들</h1>
          <h2 className="modal-header-subtitle">Governance</h2>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/skms.jpg?raw=true" alt="re100"/>
          <p className="modal-text">지배구조는 투명하고 공정한 경영을 통해 지속가능경영을 실천합니다. 기업의 목적, 이사회 역할 및 구성, 지배구조 공시 등의 요소로 나눠볼 수 있습니다</p>
          <h2 className="modal-text-title">SK 그룹의 목적함수: 행복</h2>
          <p className="modal-text"> SK는 경영철학인 SKMS의 개정을 통해 구성원과 이해관계자의 행복을 목적함수로 설정했습니다. 이를 통해 단순히 기업의 경제적 가치만을 좇는 것이 아니라, 구성원 및 이해관계자가 모두 함께 지속가능한 방향으로 나아가기를 목표로 합니다.</p>
          <h2 className="modal-text-title">이사회 중심 경영</h2>
          <p className="modal-text"> SK 그룹의 각 회사는 이사회 중심의 경영을 통해 대주주 및 경영진으로부터 독립성을 유지하고 있습니다. 지주회사인 SK주식회사에서는 크게 3개의 위원회가 있으며 거버넌스위원회, 감사위원회, 사외이사후보추천위원회로 구성되어 투명경영을 실천하고 있습니다.</p>
          <img className="small-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/%EA%B7%B8%EB%A6%BC2.png?raw=true" alt="env-result"/>
        </header>
      </article>
    )
  }
}
