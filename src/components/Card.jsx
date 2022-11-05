import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { cardName, cardDescription } = this.props;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.props;
    const { cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <div>
        <h1>Card</h1>
        <p data-testid="name-card">{ cardName }</p>

        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />

        <span data-testid="description-card">{ cardDescription }</span>

        <section data-testid="attr1-card">{ cardAttr1 }</section>
        <section data-testid="attr2-card">{ cardAttr2 }</section>
        <section data-testid="attr3-card">{ cardAttr3 }</section>

        <section data-testid="rare-card">{ cardRare }</section>

        {
          cardTrunfo === true
            ? <section data-testid="trunfo-card">Super Trybe Trunfo</section> : null
        }
      </div>
    );
  }
}

Card.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
};

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

export default Card;
