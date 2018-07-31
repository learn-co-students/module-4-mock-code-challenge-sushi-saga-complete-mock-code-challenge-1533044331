import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi"

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushi.slice(0,4).map(s => <Sushi sushi={s} key={s.id} sushiClick={props.sushiClick} />)}
        <MoreButton moreClick={props.moreClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
