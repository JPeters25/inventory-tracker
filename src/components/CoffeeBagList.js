import React from "react";
import CoffeeBag from "./CoffeeBag";  
import PropTypes from "prop-types";

function CoffeeBagList(props){
  const coffeeListSyledComponentsStyles = {
    backgroundColor: 'grey',
    width: '250px',
    margin: 'auto',
    padding: '15px',
    borderRadius: '10px',
    opacity: '.7',
    boxShadow: '2px 2px 2px 2px black'

  }
  return (
    <div style = {coffeeListSyledComponentsStyles}>
    <React.Fragment>
      {props.coffeeBagList.map((coffeeBag) =>
      <CoffeeBag
        whenCoffeeBagClicked = { props.onCoffeeBagSelection }
        names = {coffeeBag.names}
        origin = {coffeeBag.origin}
        price = {coffeeBag.price}
        roast = {coffeeBag.roast}
        weight = {coffeeBag.weight}
        id = {coffeeBag.id}
        key = {coffeeBag.id}/>
      )}
    </React.Fragment>
    </div>
  );
}

CoffeeBagList.propTypes = {
  coffeeBagList: PropTypes.array,
  onTicketSelection: PropTypes.func
};

export default CoffeeBagList;