import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import axios from 'axios';


import './Card.css';

class Card extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
    }
  }

  onDeleteClick = (event) => {
    console.log(event.target.id);
    // event.preventDefault();
    axios.delete('https://inspiration-board.herokuapp.com/boards/nora/cards/' + `${event.target.id}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      this.setState({error: error.message});
    });
  }

  // componentWillUnmount = () => {
  //
  // }

  render() {

    return (
      <div className="card">
        <span id={this.state.id} className="card__delete" onClick={this.onDeleteClick}> x</span>
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
