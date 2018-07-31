import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -10 * index }}/>
    })
  }
  // console.log("Table money remaining", props.moneyRemaining)
  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.moneyRemaining} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /*
               renderPlates takes an array
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.consumedSushi)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table
