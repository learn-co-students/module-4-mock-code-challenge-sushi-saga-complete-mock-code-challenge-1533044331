import React, { Fragment, Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';


// Endpoint!
const API = "http://localhost:3000/api/v1/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      sushi: null,
      toServe: null,
      sushiStart: 0,
      eaten: [],
      budget: 100,
    };
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(json => {
      console.log("fetch", json);
      this.setState({
        sushi: json,

      });
    });
  }

  moreSushiPlease = () => {
    console.log("more sushi")
    let newStart = this.state.sushiStart+4
    if (newStart > this.state.sushi.length) {
      newStart = 0;
    }
    this.setState({
      sushiStart: newStart
    })

  }

  eatSushi = (id) => {
    let index = this.state.sushi.findIndex((x) => x.id === id)
    let newSushi = [...this.state.sushi]
    if (this.state.budget - this.state.sushi[index].price < 0) {
      return
    }
    let newEaten = [...this.state.eaten]
    newEaten.push(this.state.sushi[index])
    let newBudget = this.state.budget - newSushi[index].price
    newSushi[index].price = 0
    this.setState({
      budget: newBudget,
      sushi: newSushi,
      eaten: newEaten,
    })
  }

  getSushiToServe = () => {
    return this.state.sushi.slice(this.state.sushiStart, this.state.sushiStart+4)
  }


  render() {
    return (
      <div className="app">
        {this.state.sushi
          ? <Fragment>
              <SushiContainer sushi={this.getSushiToServe()} onSushiClick={this.eatSushi}
               morePlease={this.moreSushiPlease}
                />
              <Table budget={this.state.budget} eaten={this.state.eaten}/>
            </Fragment>
          : null
        }
      </div>
    );
  }
}

export default App;
