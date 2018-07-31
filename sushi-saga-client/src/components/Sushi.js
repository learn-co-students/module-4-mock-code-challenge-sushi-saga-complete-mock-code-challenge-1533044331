import React, { Fragment } from 'react';

const Sushi = (props) => {
  // let img_url = props.sushi.img_url;
  // if (props.findIfSushiExists(props.sushi.id) === undefined) {
  //   img_url = '';
  // }

  return (
    <div className="sushi">
      <div
        className="plate"
        onClick={() => props.onSushiPlateClick(props.sushi)}
      >
        <img src={props.sushi.img_url} width="100%" />
        {/* Tell me if this sushi has been eaten! 

        true ? null : <img src={props.sushi.img_url} width="100%" /> */}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  );
};

export default Sushi;
