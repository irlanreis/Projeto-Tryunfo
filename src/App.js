import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    // this.onInputChange = this.onInputChange.bind(this);
    // this.test = this.test.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      saveInputs: [],
      nameFilter: '',
      rarityFilter: 'todas',
    };
  }

  onInputChange = (e) => {
    const { target } = e;
    const { type, name } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const {
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardName,
        cardDescription,
        cardImage,

      } = this.state;

      const sumTotal = 210;
      const numberMax = 90;
      const attr1 = (+cardAttr1);
      const attr2 = (+cardAttr2);
      const attr3 = (+cardAttr3);
      const sumAllAttrs = attr1 + attr2 + attr3;

      if (cardName.length === 0
        || cardImage.length === 0
        || cardDescription.length === 0
        || attr1 > numberMax
        || attr1 < 0
        || attr2 > numberMax
        || attr2 < 0
        || attr3 > numberMax
        || attr3 < 0
        || sumAllAttrs > sumTotal) {
        this.setState({
          isSaveButtonDisabled: true,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: false,
        });
      }
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName, cardImage, cardDescription } = this.state;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const { cardTrunfo, cardRare, isSaveButtonDisabled } = this.state;

    this.setState(({ saveInputs }) => ({
      saveInputs: [...saveInputs, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        isSaveButtonDisabled,
      }],

      hasTrunfo: cardTrunfo || saveInputs.some((card) => card.cardTrunfo),
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));
  };

  deleteCard = (index) => {
    const { saveInputs } = this.state;
    const newArray = saveInputs;
    newArray.splice(index, 1);

    this.setState({
      saveInputs: newArray,
      hasTrunfo: newArray.some((card) => card.cardTrunfo),
    });
  };

  filterCards = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { cardName, cardImage, cardDescription } = this.state;
    const { cardAttr1, cardAttr2, cardAttr3, hasTrunfo } = this.state;
    const { cardTrunfo, cardRare, isSaveButtonDisabled } = this.state;
    const { saveInputs, nameFilter, rarityFilter } = this.state;

    let filteredArray = nameFilter ? saveInputs
      .filter((card) => card.cardName.includes(nameFilter)) : saveInputs;
    filteredArray = rarityFilter !== 'todas' ? filteredArray
      .filter((card) => card.cardRare === rarityFilter) : filteredArray;
    return (
      <div className="main">
        <div className="main-second">
          <Form
            cardName={ cardName }
            cardImage={ cardImage }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            hasTrunfo={ hasTrunfo }
          />

          <Card
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardName={ cardName }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>

        <section className="filtered-img">
          <input
            className="input-search"
            placeholder="Buscar..."
            onChange={ this.filterCards }
            name="nameFilter"
            value={ nameFilter }
            type="text"
            data-testid="name-filter"
          />

          <select
            className="textarea"
            onChange={ this.filterCards }
            name="rarityFilter"
            value={ rarityFilter }
            type="text"
            data-testid="rare-filter"
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </section>
        <div className="container-newCard">
          <div className="new-card">
            {
              filteredArray.map((newCard, index) => (
                <section key={ index } className="card">
                  <Card
                    { ...newCard }
                  />
                  <button
                    className="button-delete"
                    type="button"
                    data-testid="delete-button"
                    onClick={ () => this.deleteCard(index) }
                  >
                    Excluir
                  </button>
                </section>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
