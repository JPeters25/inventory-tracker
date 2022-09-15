import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCoffeeBagForm (props) {
  const { coffeeBag } = props;
  const buttonStyledComponentsStyles = {
    backgroundColor:'black',
    color:'white',
    fontSize: '20px',
    padding: '10px 60px',
    borderRadius: '5px',
    margin: '10px 0px',
    cursor:'pointer'
  };
  function handleEditCoffeeBagFormSubmission(event) {
    event.preventDefault();
    props.onEditCoffeeBag({
      names: event.target.names.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
      weight: event.target.weight.value,
      id: coffeeBag.id
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleEditCoffeeBagFormSubmission}
      buttonStyle = {buttonStyledComponentsStyles}buttonText="Update Coffee Bag" />
    </React.Fragment>
  );
}

EditCoffeeBagForm.propTypes = {
  coffeeBag: PropTypes.object,
  onEditCoffeeBag: PropTypes.func
};

export default EditCoffeeBagForm;