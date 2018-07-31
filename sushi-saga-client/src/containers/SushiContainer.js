import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

//onsushiselect dont forget

const SushiContainer = (props) => {
  let renderSushi = () => {
    return props.sushis
      .slice(0, 4)
      .map((sushi) => (
        <Sushi
          key={sushi.id}
          onSushiPlateClick={props.onSushiPlateClick}
          sushi={sushi}
          sushiImg={props.sushiImg}
          findIfSushiExists={props.findIfSushiExists}
        />
      ));
  };
  return (
    <Fragment>
      <div className="belt">
        {renderSushi()}
        <MoreButton onMoreButtonClick={props.onMoreButtonClick} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
