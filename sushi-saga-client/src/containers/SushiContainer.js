import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'

import Sushi from '../components/Sushi'


//Note:
//
//realized at the end that i hard coded the "eaten" boolean and never fixed it... but dealt with it in other ways..
//

//Also didn't know where to get the empty plate to display on the belt after it sushi was clicked so it just disspears...

//If I had done the ternary as intended, seems the plate would have worked as shown in the gif.

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
