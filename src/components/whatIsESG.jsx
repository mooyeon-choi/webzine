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
          <p className="modal-text"></p>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/esg01.png?raw=true" alt="esg"/>
          <h2 className="modal-text-title">최근에 사회적으로 핫한 개념으로 떠오른 ESG란 무엇일까요?</h2>
          <p className="modal-text-middle">ESG란 기존에 재무적 성과만을 추구하던 기업들이 지속가능한 성장을 이루기 위해 고려하기 시작한 비재무적 요소들입니다. 각각 Environment, Social, Governance의 줄임말로, 우리말로 바꾸면 환경, 사회, 지배구조와 관련된 개념이라고 할 수 있습니다.</p>
          <p className="modal-text"> 환경 측면에는 기후변화 영향, 친환경 제품 개발 등의 요소를 꼽을 수 있으며, 사회 측면에는 공정한 채용, 산업안전, 공정한 경쟁 등의 요소가 있고, 마지막으로 지배구조의 측면에는 주주 권리 실현, 이사회 투명성 등을 고려하게 됩니다.</p>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/esg02.png?raw=true" alt="esg"/>
          <p className="modal-text"></p>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/KakaoTalk_20210107_142245990_01.png?raw=true" alt="graph"/>
          <p className="modal-text">투자자들은 더 이상 재무적 지표만으로 기업의 가치를 판단하여 기업에 투자하지 않습니다. 기업이 사회적 가치를 창출하고 있는지, ESG라는 사회적 요구를 수용하고 있는지 등 비재무적인 요소를 적극적으로 판단하여 투자 관점을 적극적으로 변화시키고 있습니다. 글로벌 ESG 펀드의 설정액과 개수가 2010년대 후반으로 접어들면서 가파르게 성장하고 있는 모습을 볼 수 있습니다. 따라서 SK도 이러한 사회적 요구의 변화를 적극적으로 받아들여 ESG를 실천할 필요가 있는 것입니다.</p>
        </header>
      </article>
    )
  }
}
