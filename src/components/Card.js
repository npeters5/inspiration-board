import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

console.log(emoji.getUnicode("heart_eyes"));

class Card extends Component {
  render() {

    return (
      <div className="card">
        <span className="card__delete">x</span>
        <section className="card__content">
          <p className="card__content-text">{this.props.text}</p>
          <p className="card__content-emoji">{emoji.getUnicode(String(this.props.emoji))}</p>
        </section>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;
