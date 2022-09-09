import React from "react";
import PropTypes from "prop-types";

function CoffeeBagDetail(props) {
  const { coffeeBag, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Coffee Bag Details</h1>
      <h3>{coffeeBag.names}</h3>
      <p>{coffeeBag.origin}</p>
      <p>{coffeeBag.roast}</p>
      <p><em>{coffeeBag.price}</em></p>
      <button onClick={ props.onClickingEdit}>Edit Bag</button>
      <button onClick={()=> onClickingDelete(coffeeBag.id)}>Delete Bag</button>
    </React.Fragment>
  );
}

CoffeeBagDetail.propTypes = {
  coffeeBag: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CoffeeBagDetail;