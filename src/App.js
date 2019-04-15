import React, { Component } from 'react';
import {CardComponent} from "./card.component";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      cards: [
        
      ]
    }
  }

  style = {
    cardListContainer: {
      maxWidth: "100vw",
      margin: "0 auto"
    },
    gridRow: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center"
    }
  }

  processAPIColors(apiColors) {
    return apiColors.map((color) => {
      return {color: `#${color}`};
    });
  }

  componentDidMount() {
    fetch('http://www.colr.org/json/scheme/random')
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            let cards = this.processAPIColors(json.schemes[0].colors)

            this.setState({
              cards
            })
        });
  }

  

  getCards() {
    let cardArray = this.state.cards.map((card, index) => <CardComponent color={card.color} key={index+card.color}></CardComponent>);
    let rowArray = [];

    while(cardArray.length > 0)
      rowArray.push(cardArray.splice(0,3));

    return rowArray; 
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>What in the fuck is color?</h1>
        </header>
        <div style={this.style.cardListContainer}>
          <div style={this.style.gridRow}>
            {this.getCards()}
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
