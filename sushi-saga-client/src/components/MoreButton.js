import React from 'react'

const MoreButton = (props) => {
  // console.log("more button props", props)
    return <button onClick={props.handeMoreSushiButtonClick}>
            More sushi!
          </button>
}

export default MoreButton
