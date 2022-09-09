import React from "react";
import CoffeeBag from "./CoffeeBag";  
import PropTypes from "prop-types";

function CoffeeBagList(props){
  
  return (
    <React.Fragment>
      {props.coffeeBagList.map((coffeeBag) =>
      <CoffeeBag
        whenCoffeeBagClicked = { props.whenCoffeeBagSelection }
        names = {coffeeBag.names}
        origin = {coffeeBag.origin}
        price = {coffeeBag.price}
        roast = {coffeeBag.Roast}
        id = {coffeeBag.id}
        key = {coffeeBag.id}/>
      )}
    </React.Fragment>
  );
}

CoffeeBagList.propTypes = {
  coffeeBagList: PropTypes.array,
  onTicketSelection: PropTypes.func
};

export default CoffeeBagList;