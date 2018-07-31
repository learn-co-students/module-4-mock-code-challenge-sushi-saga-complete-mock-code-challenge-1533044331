import React, { Fragment } from 'react';

const Table = (props) => {
  let money = props.money;

  if (money <= 0) {
    money = 0;
  }
  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -10 * index }} />;
    });
  };

  return (
    <Fragment>
      <h1 className="remaining">You have: ${money} remaining!</h1>
      <div className="table">
        <div className="stack">
          {/* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
          renderPlates(props.plates)}
        </div>
      </div>
    </Fragment>
  );
};

export default Table;
