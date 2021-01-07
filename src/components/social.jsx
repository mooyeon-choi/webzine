import React, { Component } from 'react'

export default class Social extends Component {
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
          <h2 className="modal-header-subtitle">Social</h2>
          <img className="center-img" src="https://post-phinf.pstatic.net/MjAyMDAxMzFfMTE0/MDAxNTgwNDMyODYxMTk2.Im_kJ7v7OBKD2bPHNW1lZXrb7MZ-wc4DHTXiHpC44k4g.42wzhPA0n0dKmkd4Wa41-nOA4M_6mODtzkRJVZCVnHcg.JPEG/80557_50707_557.jpg?type=w1200" alt="deep change"/>
          <h2 className="modal-text-title">SK - '딥 체인지' 인재 육성할 'SK 대학' 출범</h2>
          <p className="modal-text"></p>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/hynix.png?raw=true" alt="hynix"/>
          <h2 className="modal-text-title">SK 하이닉스</h2>
          <p className="modal-text"> 독거 노인 어르신을 위한 인공지능 스피커 '실버프렌드' 무상 지원, 치매 어르신과 발달장애 아동을 위한 위치주적 기반 배회감지기 '행복 GPS' 보급</p>
        </header>
      </article>
    )
  }
}
