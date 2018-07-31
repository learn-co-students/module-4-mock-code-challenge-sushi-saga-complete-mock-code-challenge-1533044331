import React, { Component } from 'react'

export default class Deposit extends Component {
  render() {
    return (
      <div >
        <form onSubmit={null}>
            <input name="cash" type="text" placeholder="Deposit money"/>
            <button type="submit">Deposit</button>
        </form>
      </div>
    )
  }
}
