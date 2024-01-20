import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      hasTrunfo,
      // getFormData
    } = this.props;

    return (
      <form className="container-form">
        <h1>Tryunfo</h1>
        <label htmlFor="cardName">
          {/* Este campo será usado para inserir o nome da carta */}
          Nome
          <input
            value={ cardName }
            onChange={ onInputChange }
            type="text"
            data-testid="name-input"
            name="cardName"
          />
        </label>

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

        <label htmlFor="cardAttr1">
          {/* Este campo será usado para inserir o primeiro atributo da carta. Ele é livre para você adicionar o atributo que mais combinar com o seu baralho. */}
          Atributo-1
          <input
            min={ 0 }
            max={ 90 }
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
            name="cardAttr1"
            id="cardAttr-1"
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="cardAttr2">
          {/* Este campo será usado para inserir o segundo atributo da carta. */}
          Atributo-2
          <input
            min={ 0 }
            max={ 90 }
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
            name="cardAttr2"
            id="cardAttr-2"
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="cardAttr3">
          {/* Este campo será usado para inserir o terceiro atributo da carta */}
          Atributo-3
          <input
            min={ 0 }
            max={ 90 }
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
            name="cardAttr3"
            id="cardAttr-3"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="cardImage">
          {/* Este campo será usado para inserir o caminho para imagem da carta. */}
          imagem
          <input
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            name="cardImage"
            id="cardImage"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="cardRare">
          {/* Este campo será usado para inserir a raridade da carta */}
          Selecione a Raridade
          <select
            value={ cardRare }
            onChange={ onInputChange }
            name="cardRare"
            id="cardRare"
            data-testid="rare-input"
          >
            {/* <option value="selecione">{ ' ' }</option> */}
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        {
          hasTrunfo ? <p> Você já tem um Super Trunfo em seu baralho </p>
            : (
              <label htmlFor="cardTrunfo">
                {/* Este campo será usado para inserir se a carta é o Super Trunfo. */}
                Super Trybe Trunfo
                <input
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                  type="checkbox"
                  name="cardTrunfo"
                  id="cardTrunfo"
                  data-testid="trunfo-input"
                />
              </label>)
        }

        <div>
          <button
            className="button-main"
            name="button"
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

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  // getFormData: PropTypes.func.isRequired,
};

export default Form;
