import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        { props.sushi.map( sushiObj => { return <Sushi sushiObj={sushiObj} onSushiClick={props.onSushiClick}/> }) }
        <MoreButton onMoreClick={props.onMoreClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer