import React from "react";
import PropTypes from "prop-types";

function CoffeeBagDetail(props) {
  const { coffeeBag, onClickingDelete } = props;
  const buttonStyledComponentsStyles = {
    backgroundColor:'black',
    color:'white',
    fontSize: '20px',
    padding: '10px 40px',
    borderRadius: '5px',
    margin: '0px auto',
    cursor:'pointer',
  };
  return (
    <React.Fragment>
      <h1>Coffee Bag Details</h1>
      <h3>{coffeeBag.names}</h3>
      <p>Origin: {coffeeBag.origin}</p>
      <p>Roast: {coffeeBag.roast}</p>
      <p>Weight in lbs: {coffeeBag.weight}</p>
      <p>Price: <em>${coffeeBag.price}/lb</em></p>
      <button style={buttonStyledComponentsStyles}onClick={ props.onClickingEdit }>Edit Bag</button>
      <br/>
      <button style={buttonStyledComponentsStyles}onClick={()=> onClickingDelete(coffeeBag.id)}>Delete Bag</button>
      <br/>
      <button style={buttonStyledComponentsStyles}onClick={ props.onClickingSell }>Sell 1</button>\
      <br/>
      
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