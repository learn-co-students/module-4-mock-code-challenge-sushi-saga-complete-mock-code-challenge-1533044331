import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';


// Endpoint!
const API = "http://localhost:3000/api/v1/sushis"

class App extends Component {
  state={
    sushi: [],
    countPlate: [],
    budget: 100,
  }

    componentDidMount(){
      fetch(API).then(r => r.json())
      .then(data => this.getSushi(data))
    }

    getSushi = (data) => {
      this.setState({
        sushi: data,
      })
    }

    handleSushiClick = (event,sushiClicked) => {
      if (this.state.budget - sushiClicked.price >= 0) {
    const sushiNew = [...this.state.sushi].map(sushi=>{
      // console.log(sushiID)
      if(sushi.id === sushiClicked.id){

        const newSushiObject = {...sushi,img_url: null, price: 0}
        // console.log(newSushiObject)
        return newSushiObject

      } else {
        return sushi
      }
      })
      const newBudget = this.state.budget - sushiClicked.price
const counts = [...this.state.countPlate]
      counts.push(sushiClicked)
      this.setState({
        sushi: sushiNew,
        countPlate: counts,
        budget: newBudget
    })
  }
    }

    handleMore = (event) => {
    const sushiNew = [...this.state.sushi].filter(s => {
      return s.img_url !== null
    })
    this.setState({
      sushi: sushiNew,
    })

    }

  render() {
    return (
      <div className="app">
        <SushiContainer  sushi={this.state.sushi} sushiClick={this.handleSushiClick} moreClick={this.handleMore}/>
        <Table plate={this.state.countPlate} budget={this.state.budget}/>
      </div>
    );
  }
}

export default App;
