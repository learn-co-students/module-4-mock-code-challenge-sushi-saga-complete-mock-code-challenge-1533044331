import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Deposit from './components/Deposit'


// Endpoint!
const API = "http://localhost:3000/api/v1/sushis"

class App extends Component {

  constructor(props){
    super(props)
    
    this.state = {
      sushiIndex: [],
      currentFour: [],
      sliceIndex: 4,
      customerCash: 100,
    }
  }

  componentDidMount(){
    return fetch(API).then(r => r.json()).then( data => this.setState({
      sushiIndex: data,
      currentFour: data.slice(0, 4)
    }))
  }

  generateFour = () => {
    let fourSushis = this.state.sushiIndex.slice(this.state.sliceIndex, this.state.sliceIndex + 4)
    this.setState({
      currentFour: fourSushis,
      sliceIndex: this.state.sliceIndex + 4
    })
  }


  onSushiClick = (event) => {
    
    if(event.price <= this.state.customerCash) {
      let indexToDelete = this.state.sushiIndex.indexOf(event)
      let newArray = [...this.state.sushiIndex]
      newArray.splice(indexToDelete, 1)
      console.log("money", event.price)
      this.setState({
        sushiIndex: newArray,
        customerCash: this.state.customerCash - event.price
      })
      this.generateFour()
    } else return
  }


  onMoreClick = (event) => {
    this.generateFour()
  }

  deposit = (event) => {
    event.preventDefault()
    console.log("deposit", event)
  }


  render() {
    console.log("app state", this.state)
    return (
      <div className="app">
        <Deposit deposit={this.deposit}/>
        <SushiContainer  sushi={this.state.currentFour} onSushiClick={this.onSushiClick} onMoreClick={this.onMoreClick}/>
        <Table cashAvailable={this.state.customerCash}/>
      </div>
    );
  }
}

export default App;