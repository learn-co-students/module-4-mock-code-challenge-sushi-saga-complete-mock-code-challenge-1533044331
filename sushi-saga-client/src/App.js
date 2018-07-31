import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';


// Endpoint!
const API = "http://localhost:3000/api/v1/sushis"
const startingWallet = 130;

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      sushiData: [],
      currentMenu: [],
      moneyRemaining: startingWallet,
      consumedSushi: [],
    }
  }

  componentDidMount(){
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({
        sushiData: data,
        currentMenu: [data[0], data[1], data[2], data[3]],
      }));
  }

  handleSushiClick = (event, sushi) => {
    let sushiPrice = sushi.price;
    let moneyRemainingClone = this.state.moneyRemaining;

    if (sushiPrice <= moneyRemainingClone){
        let currentBalance = (moneyRemainingClone - sushiPrice);
        let clonedCurrentMenu = [...this.state.currentMenu];
        let clonedConsumedSushi = [...this.state.consumedSushi];
        let foundIndex = clonedCurrentMenu.indexOf(sushi);
        if (foundIndex !== -1){
          let splicedItem = clonedCurrentMenu.splice(foundIndex, 1)
          clonedConsumedSushi.push(splicedItem[0])
          return this.setState({
            currentMenu: clonedCurrentMenu,
            moneyRemaining: currentBalance,
            consumedSushi: clonedConsumedSushi,
          });
        }
        //The app is working, and I'm almost out of time, but the setState below doesn't appear to be neccessary?? I would test/remove (if neccessary) if I had more time.
        return this.setState({
          moneyRemaining: currentBalance,
        });
    }
    else {
      alert("You don't have enough money!!!")
    }

  }

  updateSushiMenu = () => {
    let newMenu = []
    for (let i = 0; i < 4; i++){
      let randomNum = (Math.floor(Math.random() * Math.floor(100)));
      newMenu.push(this.state.sushiData[randomNum])
    }
    newMenu.length = 4;
    this.setState({currentMenu: newMenu})
  }

  render() {
    // console.log("consumedSushiArray at app render: ", this.state.consumedSushi)
    return (
      <div className="app">
        <SushiContainer
          sushiData={this.state.sushiData}
          currentMenu={this.state.currentMenu}
          handleSushiClick={this.handleSushiClick}
          handeMoreSushiButtonClick={this.updateSushiMenu}
          />
        <Table
          moneyRemaining={this.state.moneyRemaining}
          consumedSushi={this.state.consumedSushi}
          />
      </div>
    );
  }
}

export default App;
