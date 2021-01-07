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
        <h1 className="modal-header-subtitle">ESG와 관련해 SK 그룹이 해 온/해 나갈 것들</h1>
          <h2 className="modal-header-subtitle">Social</h2>
        <p className="modal-text"></p>
        <img src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/social-main.png?raw=true" alt="deep change"/>
          <p className="modal-text">SK 에서는 ESG에서의 'S' 사회적 책임 부분에서도 열심히 활동을 하고 있습니다. SK에서 실행하고 있는 사회 공헌 활동은 인재 확보 및 육성, 사회 안정망 관리, 동반 성장 이렇게 세가지로 나뉘어집니다.</p>
          <p className="modal-text"></p>
          <h2 className="modal-text-title">인재 육성</h2>
          <h2 className="modal-text-title">SK - '딥 체인지' 인재 육성할 'SK 대학' 출범</h2>
          <img className="center-img" src="https://post-phinf.pstatic.net/MjAyMDAxMzFfMTE0/MDAxNTgwNDMyODYxMTk2.Im_kJ7v7OBKD2bPHNW1lZXrb7MZ-wc4DHTXiHpC44k4g.42wzhPA0n0dKmkd4Wa41-nOA4M_6mODtzkRJVZCVnHcg.JPEG/80557_50707_557.jpg?type=w1200" alt="deep change"/>
          <p className="modal-text">SK그룹이 내년 1월 그룹 싱크탱크인 SK경영경제연구소와 기업문화 교육기관인 SK아카데미 등 역량개발 조직을 통합한 SK 유니버시티를 공식 출범을 하기로 했습니다. 4차 산업혁명 등 급속히 변화화는 경영 환경 속에 임직원들의 핵심 역량을 강화하고 지속 성장을 위한 선제적 대응 차원입니다. 또한 SK 유니버시티는 최태원 SK 회장의 경영철학으로 근원적 변화를 강조한 '딥 체인지(Deep Change)' 역량을 키워나갈 교육·연구 통합 플랫폼 역할을 할 것으로 예상됩니다.</p>
          <h2 className="modal-text-title">사회 안전망 관리</h2>
          <h2 className="modal-text-title">SK 텔레콤 </h2>
          <h2 className="modal-text-title">혈액 부족 해결 위한 대규모 '헌혈 릴레이'</h2>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/blood.png?raw=true" alt="hynix"/>
          <p className="modal-text-middle">SK텔레콤(대표이사 사장 박정호 www.sktelecom.com )이 코로나19 장기화로 인한 혈액 수급난 극복을 위해 SK ICT패밀리社 임직원이 참여하는 대규모 헌혈 릴레이에 나섰다고 28일 밝혔습니다.</p>
          <p className="modal-text">이번 행사는 지속적이고 안정적인 혈액 수급을 위해 혈액이 필요할 때마다 이뤄지는 일회성 참여가 아니라 릴레이 방식의 헌혈이 더 효과적일 것이라는 판단 하에 기획되었습니다. SK ICT패밀리社 임직원들의 자발적인 참여로 진행되며, 전국 각 본부 및 ICT 패밀리社에서 해당 지역 혈액원과의 ‘지역 매칭’ 형태로 단체 헌혈을 추진하게 됩니다.</p>
          <h2 className="modal-text-title">SK 하이닉스</h2>
          <h2 className="modal-text-title">기억장애 수호천사(행복GPS)</h2>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/hynix.png?raw=true" alt="hynix"/>
          <p className="modal-text-middle">‘기억장애 수호천사(행복GPS)’ 프로그램은 SK하이닉스의 정보통신기술(ICT)을 활용하고 있습니다. 기억장애계층의 실종사고 발생 시 조기 발견을 돕고 나아가 실종사고를 방지하는 것이 목표입니다. 이를 위해 SK하이닉스는 2016년 실시간 위치추적 배회감지기를 개발해 보급하고 있습니다.</p>
          <p className="modal-text">SK하이닉스는 26일 이천지역에서 실버프렌드 보급사업을 확대해서 실시한다고 밝혔습니다. 실버프렌드는 홀몸어르신의 일상생활을 살피고 위급상황 발생 시 신속한 대응을 할 수 있도록 인공지능 스피커, 사물인터넷(IoT) 조명 등으로 구성된 정보기술(IT)기기입니다.</p>
          <h2 className="modal-text-title">SK</h2>
          <h2 className="modal-text-title">'한끼 나눔 온택트 프로젝트'</h2>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/KakaoTalk_20210107_093924105.png?raw=true" alt="hynix"/>
          <p className="modal-text-middle">신종 코로나바이러스 감염증(코로나19) 재확산으로 고통받는 취약계층의 먹는 문제 해결을 위해 SK가 팔을 걷어붙이고 나섰습니다. 최태원 SK그룹 회장이 강조해 온 ‘안전망(Safety Net)’ 구축의 연장선상에서 팬데믹 상황 속 무료 급식소 중단으로 가장 절박한 결식문제 부터 해결해보자는 취지입니다.</p>
          <p className="modal-text">SK는 5일 끼니 해결조차 쉽지 않은 취약계층과 매출급감으로 생존 절벽에 내몰린 영세 음식점을 함께 지원할 수 있는 ‘한끼 나눔 온(溫)택트 프로젝트’를 시작한다고 밝혔습니다.</p>
          <h2 className="modal-text-title">SK이노베이션</h2>
          <h2 className="modal-text-title">저소득 청소년 학습용 노트북 PC 전달, 독거 노인 결식 방지 SK행복생필품꾸러미 선물, 취약 계층 여름용 쿨 마스크 제작.지원</h2>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/KakaoTalk_20210107_093923800.png?raw=true" alt="hynix"/>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/KakaoTalk_20210107_093923548.png?raw=true" alt="hynix"/>
          <p className="modal-text">SK이노베이션 울산CLX는 코로나19 극복 과정에서 지역사회의 어려운 이웃들이 소외되지 않도록 저소득 청소년 온라인 학습용 노트북PC 전달, 독거노인 결식 방지 SK행복생필품꾸러미 선물, 취약계층 학생 여름용 쿨 마스크 제작∙지원 등의 사회안전망(Safety Net) 구축∙강화로 SK그룹의 ‘ESG*(환경, 사회, 지배구조) 경영’ 가속화에 앞장서고 있습니다.</p>
          <h2 className="modal-text-title">동반 성장</h2>
          <h2 className="modal-text-title">SKT</h2>
          <h2 className="modal-text-title">'혁신주도형 임금격자 해소 협약' 체결</h2>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/1250338_20191205165527_418_0001.jpg?raw=true" alt="hynix"/>
          <p className="modal-text-middle">SKT는 지난해 동반위 및 주요 협력사들과 ‘혁신주도형 임금격차 해소 협약’을 체결하고, 기술보호 및 특허 비용 ,5G, AI 교육 · 컨설팅 지원 ,금융(동반성장펀드, 대금지급 바로 프로그램) ,협력사 임금 · 복리후생 등 전방위 상생 협력을 추진해왔습니다.</p>
          <p className="modal-text">이와 더불어 재택근무 및 마케팅솔루션 무상 지원 ,인재 확보를 위한 온라인 협력사 채용박람회 개최 ,방역마스크 배포 등 민첩하게 협력사 고충을 덜어줬다는 게 회사 측 설명입니다.</p>
          <h2 className="modal-text-title">SK 건설</h2>
          <h2 className="modal-text-title">'동반성장몰'</h2>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/2020062301119_0.jpg?raw=true" alt="hynix"/>
          <p className="modal-text">동반성장 최우수 기업인 SK건설이 중소기업과의 상생을 위해 또 한번 발벗고 나섰습니다. SK건설은 중소기업과의 동반성장 강화를 위해 구성원 전용 온라인 ‘동반성장몰’을 열고, 중소기업의 판로 확대를 지원한다고 밝혔습니다. 이런 지속적인 노력에 힘입어 SK건설은 지난해 6월 동반성장위원회가 주관하는 동반성장지수 평가에서 건설업계를 통틀어 유일하게 3년 연속(‘16~’18년) 최우수 등급을 받아 ‘2019년 최우수 명예기업’으로 선정됐습니다.</p>
          <h2 className="modal-text-title">SK 하이닉스</h2>
          <h2 className="modal-text-title">패턴 웨이퍼 지원 사업, ESG 컨설팅, 청년 Hy-Five</h2>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/img.jpg?raw=true" alt="hynix"/>
          <p className="modal-text-middle">SK하이닉스는 이미 수 년 전부터 “기업이 돈만 벌어서는 생존할 수 없으며, 사회적 가치를 키워서 경제적 가치를 만들어낸다”는 SK그룹의 철학을 바탕으로 DBL(Double Bottom Line, 경제적 가치와 사회적 가치를 동시에 추구하는 경영철학) 경영을 본격화했습니다.</p>
          <p className="modal-text">‘동반성장’ 역시 SK하이닉스가 추구하는 중요한 가치 중 하나입니다. SK하이닉스는 국내 반도체 생태계를 강화하기 위해 회사가 보유한 반도체 지식과 노하우를 아낌없이 공유하고 있습니다. 협력사를 대상으로 분석/측정 지원 사업, 패턴 웨이퍼 지원 사업, ESG컨설팅, 청년 Hy-Five 등 동반성장 프로그램을 운영 중입니다.</p>
        </header>
      </article>
    )
  }
}
