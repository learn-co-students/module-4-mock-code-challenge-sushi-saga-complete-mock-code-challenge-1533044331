import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  let sushiCount = 0;
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushi.map((oneSushi) => {
            return <Sushi
              key={oneSushi.id}
              oneSushi={oneSushi}
              onClick={props.onSushiClick}/>
          })
        }
        <MoreButton onClick={props.morePlease} />
      </div>
    </Fragment>
  )
}

export default SushiContainer

// const SushiContainer = (props) => {
//   return (
//     <Fragment>
//       <div className="belt">
//         {
//           /*
//              Render Sushi components here!
//           */
//         }
//         <MoreButton />
//       </div>
//     </Fragment>
//   )
// }
