import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewCoffeeBagForm(props){
  function handleNewCoffeeBagFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeBagCreation({
      names: event.target.names.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
      weight: event.target.weight.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewCoffeeBagFormSubmission}
        buttonText="Create Coffee"/>
    </React.Fragment>
  );
}

NewCoffeeBagForm.propTypes = {
  onNewCoffeeBagCreation: PropTypes.func
};

export default NewCoffeeBagForm;