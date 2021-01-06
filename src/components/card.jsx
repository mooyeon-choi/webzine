import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div className="card">
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
