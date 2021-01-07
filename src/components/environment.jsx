import React, { Component } from 'react'

export default class Environment extends Component {
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
          <h2 className="modal-header-subtitle">Environment</h2>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/re100.jpg?raw=true" alt="re100"/>
          <img src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/%ED%96%89%EB%B3%B5%EA%B2%BD%EC%98%81.JPG?raw=true" alt="re100"/>
          <h2 className="modal-text-title">SK는 한국 최초로 RE100에 가입하였습니다. </h2>
          <p className="modal-text">RE100이란, Renewable Energy, 즉 재생에너지를 2050년까지 소비전력의 100퍼센트의 비율로 사용하겠다고 선언한 글로벌 캠페인입니다. RE100은 수출 경쟁력과도 직결되어 sk의 글로벌 경쟁력을 확보 할 수 있는 중요한 요소중 하나입니다.</p>
          <img className="center-img" src="https://img.asiatoday.co.kr/file/2020y/10m/23d/2020102201001976600130961.jpg" alt="h"/>
          <h2 className="modal-text-title">수소관련- 주식회사/건설 </h2>
          <p className="modal-text">sk주식회사는 친환경 에너지로 성장하고있는 수소사업에 본격적으로 진출하겠다고 선언했습니다. 에너지 관련회사인 sk innovation, sk e&s 등 관계사 인력으로 구성된 수소사업추진단을 신설하여 사업 추진전략을 실행할 예정입니다.</p>
          <img className="center-img" src="https://insight-prd-data.s3.ap-northeast-2.amazonaws.com/wp-content/uploads/2/cfile27.uf.0215234D51353F0C0D4709.jpg" alt="cloud bems"/>
          <h2 className="modal-text-title">ICT관련 -skt</h2>
          <p className="modal-text">sk텔레콤은 지난 2011년부터 에너지 사용을 자동으로 최적화하는 ‘클라우드 BEMS’를 개발, 사용하고 있습니다. 이는 건물 내 조명 냉·난방기 등의 센서 및 네트워크를 기반으로 중앙관리센터에 연결, 빌딩의 전력·에너지 사용량을 실시간으로 분석하는 시스템입니다.</p>
          <h2 className="modal-text-title">환경, 사회 성과 및 목표</h2>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/KakaoTalk_20210107_144305742.png?raw=true" alt="env-result"/>
        </header>
      </article>
    )
  }
}
