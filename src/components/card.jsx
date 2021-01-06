import React, { Component } from 'react'

export default class Card extends Component {
  handleOpenModal = () => {
    this.props.onOpenModal(this.props.card.id)
  }
  render() {
    return (
      <div className="card" onClick={this.handleOpenModal}>
        <img className="card-img" src={this.props.card.src} alt={this.props.card.alt}/>
        <section className="decription">
          <h1 className="decription-title">{this.props.card.title}</h1>
          <h2 className="decription-subtitle">{this.props.card.subtitle}</h2>
          <p className="decription-text">{this.props.card.text}</p>
          <p></p>
        </section>
      </div>
    )
  }
}
