import React, { Component } from 'react'

export default class WhatIsESG extends Component {
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
        <h1 className="modal-header-title">ESG란 무엇일까? </h1>
        <h1 className="modal-header-subtitle">(Environment, Social, Governance) </h1>
          <h2 className="modal-header-subtitle">ESG의 시작과 배경</h2>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/esg01.png?raw=true" alt="esg"/>
          <h2 className="modal-text-title">최근에 사회적으로 핫한 개념으로 떠오른 ESG란 무엇일까요?</h2>
          <p className="modal-text">ESG란 기존에 재무적 성과만을 추구하던 기업들이 지속가능한 성장을 이루기 위해 고려하기 시작한 비재무적 요소들입니다. 각각 Environment, Social, Governance의 줄임말로, 우리말로 바꾸면 환경, 사회, 지배구조와 관련된 개념이라고 할 수 있습니다. 환경 측면에는 기후변화 영향, 친환경 제품 개발 등의 요소를 꼽을 수 있으며, 사회 측면에는 공정한 채용, 산업안전, 공정한 경쟁 등의 요소가 있고, 마지막으로 지배구조의 측면에는 주주 권리 실현, 이사회 투명성 등을 고려하게 됩니다.</p>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/esg02.png?raw=true" alt="esg"/>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/erg-graph02.png?raw=true" alt="esg"/>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/esg-graph01.png?raw=true" alt="esg"/>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/esg-graph00.png?raw=true" alt="esg"/>
        </header>
      </article>
    )
  }
}
