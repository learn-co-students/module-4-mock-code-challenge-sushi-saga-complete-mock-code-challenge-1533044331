import React, { Fragment } from 'react'

const Sushi = (props) => {
  // console.log(props)


  return (
    <div className="sushi">
      <div className="plate"
           onClick={(event)=> props.sushiClick(event,props.sushi)}>
        {
          !props.sushi.img_url
              ?
            null
          :
            <img src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
