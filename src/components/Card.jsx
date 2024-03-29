import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="container-card ">
        <h1 data-testid="name-card">{ cardName }</h1>

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
            ? <section data-testid="trunfo-card">Super Trunfo</section> : null
        }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
export default Card;
