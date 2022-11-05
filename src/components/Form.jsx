import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription } = this.props;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.props;
    const { cardImage, cardRare, cardTrunfo } = this.props;
    const { isSaveButtonDisabled } = this.props;
    const { onInputChange, onSaveButtonClick } = this.props;

    return (
      <form>
        <div>
          <label htmlFor="cardName">
            {/* Este campo será usado para inserir o nome da carta */}
            Nome
            <input
              value={ cardName }
              onChange={ onInputChange }
              type="text"
              data-testid="name-input"
              id="cardName"
            />
          </label>
        </div>

        <div>
          <label htmlFor="cardDescription">
            {/* Este campo será usado para inserir a descrição da carta. */}
            Descrição
            <textarea
              value={ cardDescription }
              onChange={ onInputChange }
              name="cardDescription"
              id="cardDescription"
              data-testid="description-input"
            />
          </label>
        </div>

        <div>
          <label htmlFor="cardAttr-1">
            {/* Este campo será usado para inserir o primeiro atributo da carta. Ele é livre para você adicionar o atributo que mais combinar com o seu baralho. */}
            Atributo-1
            <input
              value={ cardAttr1 }
              onChange={ onInputChange }
              type="number"
              name="cardAttr-1"
              id="cardAttr-1"
              data-testid="attr1-input"
            />
          </label>
        </div>

        <div>
          <label htmlFor="cardAttr-2">
            {/* Este campo será usado para inserir o segundo atributo da carta. */}
            Atributo-2
            <input
              value={ cardAttr2 }
              onChange={ onInputChange }
              type="number"
              name="cardAttr-2"
              id="cardAttr-2"
              data-testid="attr2-input"
            />
          </label>
        </div>

        <div>
          <label htmlFor="cardAttr-3">
            {/* Este campo será usado para inserir o terceiro atributo da carta */}
            Atributo-3
            <input
              value={ cardAttr3 }
              onChange={ onInputChange }
              type="number"
              name="cardAttr-3"
              id="cardAttr-3"
              data-testid="attr3-input"
            />
          </label>
        </div>

        <div>
          <label htmlFor="image">
            {/* Este campo será usado para inserir o caminho para imagem da carta. */}
            imagem
            <input
              value={ cardImage }
              onChange={ onInputChange }
              type="text"
              name="image"
              id="image"
              data-testid="image-input"
            />
          </label>
        </div>

        <div>
          <label htmlFor="select-rare">
            {/* Este campo será usado para inserir a raridade da carta */}
            Selecione a Raridade
            <select
              value={ cardRare }
              onChange={ onInputChange }
              name="select-rare"
              id="select-rare"
              data-testid="rare-input"
            >
              {/* <option value="selecione">{ ' ' }</option> */}
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="super-trunfo">
            {/* Este campo será usado para inserir se a carta é o Super Trunfo. */}
            Super Trunfo
            <input
              checked={ cardTrunfo }
              onChange={ onInputChange }
              type="checkbox"
              name="super-trunfo"
              id="super-trunfo"
              data-testid="trunfo-input"
            />
          </label>
        </div>

        <div>
          <button
            onClick={ onSaveButtonClick }
            disabled={ isSaveButtonDisabled }
            type="submit"
            data-testid="save-button"
          >
            Salvar
          </button>
        </div>

      </form>
    );
  }
}

Form.defaultProps = {
  cardName: 'name-card',
  cardDescription: 'description-card',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  isSaveButtonDisabled: false,
  onInputChange: () => {},
  onSaveButtonClick: () => {},
};

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onSaveButtonClick: PropTypes.func,
  onInputChange: PropTypes.func,
};

export default Form;
