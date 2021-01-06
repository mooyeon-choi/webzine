import React, { Component } from 'react'

export default class WhatIsESG extends Component {
  handleCloseModal = () => {
    this.props.onCloseModal();
  }

  render() {
    return (
      <article className="modal" onClick={this.handleCloseModal}>
        <header className="modal-header">
          <h1 className="modal-header-title">ESG(Environment, Social, Governance)란 무엇일까? </h1>
          <h2 className="modal-header-subtitle">ESG의 시작과 배경</h2>
          
        </header>
      </article>
    )
  }
}
