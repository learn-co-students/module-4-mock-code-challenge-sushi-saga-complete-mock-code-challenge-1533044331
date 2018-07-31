import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'

import Sushi from '../components/Sushi'


const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          /*
             Render Sushi components here!
          */}

          {props.currentMenu.map(menuItem => <Sushi
            key={menuItem.id}
            id={menuItem.id}
            sushi={menuItem}
            name={menuItem.name}
            img={menuItem.img_url}
            price={menuItem.price}
            eaten={false}
            handleSushiClick={props.handleSushiClick}
             />)}

        <MoreButton handeMoreSushiButtonClick={props.handeMoreSushiButtonClick} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
