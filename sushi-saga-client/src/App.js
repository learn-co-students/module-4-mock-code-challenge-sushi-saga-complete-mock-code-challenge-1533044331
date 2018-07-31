import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';


// Endpoint!
const API = "http://localhost:3000/api/v1/sushis"

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      sushiData: [],
      currentMenu: [],
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
    console.log("You clicked this sushi: ", sushi)
    let clonedCurrentMenu = [...this.state.currentMenu];
    let foundIndex = clonedCurrentMenu.indexOf(sushi);
    if (foundIndex !== -1){
      clonedCurrentMenu.splice(foundIndex, 1)
      return this.setState({currentMenu:clonedCurrentMenu});
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
    console.log("currentMenu at app render: ", this.state.currentMenu)
    return (
      <div className="app">
        <SushiContainer
          sushiData={this.state.sushiData}
          currentMenu={this.state.currentMenu}
          handleSushiClick={this.handleSushiClick}
          handeMoreSushiButtonClick={this.updateSushiMenu}
          />
        <Table />
      </div>
    );
  }
}

export default App;
