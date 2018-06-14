import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      emoji: '',
    };
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = fieldName === 'age' ? parseInt(event.target.value) : event.target.value;
    const updateState = {};
    updateState[fieldName] = fieldValue;
    this.setState(updateState);
  }

  // valid = () => {
  //   return this.state.name.length > 0 && this.state.age > 0
  // }

  clearForm = () => {
    this.setState({
      text: '',
      emoji: '',
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    // if (this.valid()) {
      this.props.addCardCallback(this.state);
      this.clearForm();
    // }
  }

  render() {
    return (
      <div className="new-card-form">
        <h3 className="new-card-form__header">Add a card</h3>
        <form
          onSubmit={this.onFormSubmit}>
          <div className="new-card-form__form">
            <label className="new-card-form__form-label" htmlFor="text">Message: </label>
            <input
              className="new-card-form__form-textarea"
              name="message"
              value={this.state.text}
              type="text"
              onChange={this.onFieldChange}
            />
            <label className="new-card-form__form-label" htmlFor="emoji">Emoji: </label>
            <select
              className="new-card-form__form-textarea"
              name="emoji"
              value={this.state.emoji}
              type="select"
              onChange={this.onFieldChange}>
            {EMOJI_LIST.map(x => <option key={x}>{emoji.getUnicode(x)}</option>)};
            </select>
          </div>
          <input type="submit" value="Add Card" />
        </form>
      </div>
    )
  }
}

NewCardForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
}

export default NewCardForm;
