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

  render() {
    const { cardName, cardImage, cardDescription } = this.state;
    const { cardAttr1, cardAttr2, cardAttr3, hasTrunfo } = this.state;
    const { cardTrunfo, cardRare, isSaveButtonDisabled } = this.state;

    return (
      <div>
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
    );
  }
}

export default App;
