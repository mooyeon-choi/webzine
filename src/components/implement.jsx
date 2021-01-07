import React, { Component } from 'react'

export default class Implement extends Component {
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
        <h1 className="modal-header-title">ESG, 우리는 무엇을 실천해야 할까</h1>
        <h2 className="modal-header-subtitle">구성원 차원에서 할 수 있는 작은 아이디어들</h2>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/kimch02.jpg?raw=true" alt="esg"/>
          <h2 className="modal-text-title">구성원이 할 수 있는 ESG 경영</h2>
          <p className="modal-text">앞서서 ESG와 관련해서 사회적 가치를 창출하려는 기업의 실천사례와 결과수치들을 알아보았습니다. 자금 투자나 사업 추진과 같은 기업 단위의 정책들을 보면서 조직의 구성원은 ESG 경영을 실천하기 어려운 것이 아니냐고 생각하기 쉽습니다. 하지만 조직의 단일 구성원도 얼마든지 사회적 가치를 창출할 수 있다는 사실을 알고 계신가요?</p>
          <p className="modal-text">대규모 투자가 필요한 ESG활동을 보면서 구성원은 이를 실천하기 어려운 것이라고 생각하기 쉽습니다. 하지만 단일 구성원 역시 얼마든지 사회적 가치를 창출할 수 있다는 사실!</p>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/kimch01.jpg?raw=true" alt="esg"/>
          <h2 className="modal-text-title">청주시자원봉사센터, SK하이닉스와 겨울맞이 김장 나눔 행사</h2>
          <p className="modal-text">24일 오전 11시 충북 청주 시 상당구 용암1동 행정복지센터 지하주차장에서 SK하이닉스와 함께 김장 나눔 행사를 진행했다. 이번 김장 나눔 행사로 김치 6300kg을 담가 지역 내 취약계층 630가구의 겨울나기를 지원한다. 특히 이번 행복김장나눔은 SK하이닉스에서 김장비용을 지정기탁하고 한범덕 청주시장을 비롯한 청주시 자원봉사자와 SK하이닉스 문유진 부사장과 임직원 등 총 50여 명이 함께했다.</p>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/2018013101855_0.jpg?raw=true" alt="esg"/>
          <h2 className="modal-text-title">SK건설 신입사원, 연탄 나눔 봉사활동 실시</h2>
          <p className="modal-text">이날 봉사활동에 참가한 SK건설 신입사원 35명은 연탄 1200장을 부암동 일대 저소득층 4가구에 직접 배달하고 인근 지역 환경 정화 활동을 실시했다. SK건설은 사회적 책임을 다하고 나눔을 실천하는 기업문화를 몸소 체험할 수 있도록 지난 2005년부터 신입사원 교육 필수과정으로 사회공헌 활동을 실시해 오고 있다.</p>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/KakaoTalk_20210107_093727821.png?raw=true" alt="esg"/>
          <h2 className="modal-text-title">'인형에 마음 담아' SK이노, 취약계층 지원 봉사활동 전개</h2>
          <p className="modal-text">SK이노베이션가 취약계층의 ‘심리방역’ 지원 차원에서 직접 제작한 인형과 손편지를 선물하는 ‘코로나19 극복 마음방역 으랏차차 언택트 자원봉사’를 진행했다고 22일 밝혔다. 인형은 폐플라스틱 재활용솜을 활용해 만들었고, 30초짜리 음성 녹음도 담아 취약계층에 응원 메시지를 전했다. 지난달까지 두 달 간 진행된 이번 봉사활동에는 SK이노베이션 계열 임직원 2,500여명이 참여했다. 인형과 손편지는 마스크 등 생활방역 용품과 함께 독거노인 1,500명, 발달장애인 1,000명 등에게 전달됐다.</p>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/restmb_allidxmake.jpg?raw=true" alt="esg"/>
          <h2 className="modal-text-title">구성원의 소통 모바일 플랫폼 ‘햅(H.App)’ / 구성원의 행복 소통채널 ‘행복 Designer’</h2>
          <p className="modal-text">‘햅’은 Happy Application의 약어로 구성원이 스스로 행복 Idea를 제안하고 실행할 수 있는 소통 모바일 플랫폼입니다. 구성원 누구나 행복 Idea를 제안할 수 있을 뿐만 아니라, 행복추진위원 멤버를 모집하고 개선안을 수립하여 최종 시행안을 공유하며 구성원의 행복을 디자인하는 ‘행복 Designer’가 될 수 있답니다. 다양한 그룹별 소통 게시판으로 행복을 공유하고 서베이 기능을 통해 행복 Data를 축적하여 구성원의 행복에 더욱 늘려가고, 이는 더 큰 사회적 가치로 이어집니다.</p>
          <img className="center-img" src="https://github.com/mooyeon-choi/webzine/blob/main/src/images/hangarae.jpg?raw=true" alt="esg"/>
          <h2 className="modal-text-title">생활 속 SV 실천 ‘행가래’ </h2>
          <p className="modal-text">‘행가래’는 전 구성원이 동참할 수 있는 일상 속 사회문제 해결 플랫폼입니다. 구성원의 관심, 호응, 만족도를 제고하기 위해 SV 실천 아이디어 발굴부터 구체적인 실천 방법까지 구성원이 직접 참여하고 소통할 수 있도록 운영되고 있습니다. 실천 아이템은 실생활과 밀접하게 연계되어 구성원이 쉽게 실천할 수 있으며, 모바일 앱을 통해 활동에 대한 기록, 조회할 수 있을 뿐만 아니라 SV 실천할 때마다 ‘SV리워드’를 획득할 수 있습니다. SV리워드는 사내 카페에서 사용 가능하며, 이 외에도 사회적 기업 상품 구매 및 자선 단체 기부에 사용할 수 있어서 또 다른 사회적 가치를 창출할 수 있습니다. 실천 아이템으로는 계단 오르기, 머그컵 사용, 사내 잔반 남기지 않기, 헌혈, 아이스팩 재활용, 양면인쇄 활용, SV 아이디어 제안 등이 있습니다. 이렇게 사소해 보이는 일일지라도 충분히 사회적 가치를 창출할 수 있습니다. 최근에는 COVID-19 상황을 고려하여, 장소에 구애 받지 않고 구성원이 각자 일정과 관심사에 따라 비대면으로 SV실천을 할 수 있는 활동들도 진행했습니다. 온라인 활동으로 사회적 기업 자문과 오프라인 활동으로 봉사 KIT를 받아 가족, 구성원들이 함께 제작하여 기부하는 활동들을 진행하였습니다</p>
        </header>
      </article>
    )
  }
}
