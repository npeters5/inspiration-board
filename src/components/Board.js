import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount = () => {
    // console.log("Component did mount was called");
    axios.get('https://inspiration-board.herokuapp.com/boards/nora/cards')
    .then((response) => {
      // console.log(response.data);
      this.setState({cards: response.data});
    })
    .catch((error) => {
      this.setState({error: error.message});
    });
  }

  renderCardList = () => {
    const cardList = this.state.cards.map((item, index) => {
      return (
        <Card
          key={index}
          text={item.card.text}
          emoji={item.card.emoji}
        />
      );
    });
    return cardList;
  }

  render() {
    return (
      <div className="board">
        {this.renderCardList()}
      </div>
    )
  }
}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
