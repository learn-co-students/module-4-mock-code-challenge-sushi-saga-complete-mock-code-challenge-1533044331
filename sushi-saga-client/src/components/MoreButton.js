import React from 'react'

const MoreButton = (props) => {
    return <button onClick={(event) => props.moreClick(event)}>
            More sushi!
          </button>
}

export default MoreButton
