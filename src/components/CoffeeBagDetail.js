import React from "react";
import PropTypes from "prop-types";

function CoffeeBagDetail(props) {
  const { coffeeBag, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Coffee Bag Details</h1>
      <h3>{coffeeBag.names}</h3>
      <p>Origin: {coffeeBag.origin}</p>
      <p>Roast: {coffeeBag.roast}</p>
      <p>Weight in lbs: {coffeeBag.weight}</p>
      <p>Price: <em>${coffeeBag.price}/lb</em></p>
      <button onClick={ props.onClickingEdit }>Edit Bag</button>
      <button onClick={()=> onClickingDelete(coffeeBag.id)}>Delete Bag</button>
      <button onClick={ props.onClickingSell }>Sell 1</button>
    </React.Fragment>
  );
}

CoffeeBagDetail.propTypes = {
  coffeeBag: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func
};

export default CoffeeBagDetail;