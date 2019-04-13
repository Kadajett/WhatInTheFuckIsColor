import React, { Component } from 'react';
import {CardComponent} from "./card.component";
import './App.css';

class App extends Component {

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

  cards = [
    {
      color: '#40407a',
    },
    {
      color: '#706fd3',
    },
    {
      color: '#f7f1e3',
    },
    {
      color: '#34ace0',
    },
    {
      color: '#33d9b2',
    },
    {
      color: '#2c2c54',
    },
    {
      color: '#474787',
    },
    {
      color: '#aaa69d',
    },
    {
      color: '#2c2c54',
    },
    {
      color: '#218c74',
    },
    {
      color: '#84817a',
    },
    {
      color: '#ff5252',
    },
    {
      color: '#cc8e35',
    },
    {
      color: '#ccae62',
    },
  ];

  getCards() {
    let cardArray = this.cards.map((card, index) => <CardComponent color={card.color} key={index+card.color}></CardComponent>);
    let rowArray = [];

    while(cardArray.length > 0)
      rowArray.push(cardArray.splice(0,3))

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
