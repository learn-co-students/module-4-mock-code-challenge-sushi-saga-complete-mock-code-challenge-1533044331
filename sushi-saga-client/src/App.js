import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = 'http://localhost:3000/api/v1/sushis';
let empty = [];
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sushis: [],
      emptyPlates: [],
      moneyRemaining: 100,
    };
  }

  componentDidMount() {
    this.getSushis();
  }

  getSushis = () =>
    fetch(`http://localhost:3000/api/v1/sushis`)
      .then((res) => res.json())
      .then((sushis) =>
        this.setState({
          sushis,
        })
      );

  shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  handleMoreButtonClick = () => {
    let shuffled = this.shuffle(this.state.sushis);
    this.setState({
      sushis: shuffled,
    });
  };

  handleSushiPlateClick = (sushi) => {
    if (sushi.img_url !== '') {
      empty.push(sushi);
      let index = this.state.sushis.findIndex((s) => s.id == sushi.id);
      sushi.img_url = '';
      let remaining = this.state.moneyRemaining - sushi.price;
      this.state.sushis[index] = sushi;
      this.setState({
        sushis: this.state.sushis,
        emptyPlates: empty,
        moneyRemaining: remaining,
      });
    }
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          onMoreButtonClick={this.handleMoreButtonClick}
          sushis={this.state.sushis}
          onSushiPlateClick={this.handleSushiPlateClick}
          findIfSushiExists={this.findIfSushiExists}
        />
        <Table
          plates={this.state.emptyPlates}
          money={this.state.moneyRemaining}
        />
      </div>
    );
  }
}

export default App;
