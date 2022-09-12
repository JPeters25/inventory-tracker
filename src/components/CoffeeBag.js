import React from "react";
import PropTypes from "prop-types";

function CoffeeBag(props){
  
  return (
    <React.Fragment>
      <div onClick={() => props.whenCoffeeBagClicked(props.id)}>
        <h3>{props.names}</h3>
      </div>
    </React.Fragment>
  );
}

CoffeeBag.propTypes = {
  names: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenCoffeeBagClicked: PropTypes.func
}

export default CoffeeBag;