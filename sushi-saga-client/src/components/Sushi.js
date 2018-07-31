import React, { Fragment } from 'react'

const Sushi = (props) => {
  console.log("url: ", props)
  return (
    <div className="sushi">
      <div className="plate"
           onClick={() => props.onClick(props.oneSushi.id)}
           >
        {
          props.oneSushi.price === 0
          ? null
          : <img src={props.oneSushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.oneSushi.name} - ${props.oneSushi.price}
      </h4>
    </div>
  )
}

export default Sushi


// const Sushi = (props) => {
//   return (
//     <div className="sushi">
//       <div className="plate"
//            onClick={/* Give me a callback! */ null}>
//         {
//           /* Tell me if this sushi has been eaten! */
//           true ?
//             null
//           :
//             <img src={/* Give me an image source! */} width="100%" />
//         }
//       </div>
//       <h4 className="sushi-details">
//         {/* Give me a name! */} - ${/* Give me a price! */}
//       </h4>
//     </div>
//   )
// }
