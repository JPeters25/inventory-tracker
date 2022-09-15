import React from "react";
import PropTypes from "prop-types";

const ReusableForm = (props) => {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='names'
          placeholder='Coffee Name' />
          <br/>
          <br/>
        <input
          type='text'
          name='origin'
          placeholder='Coffee Origin' />
          <br/>
          <br/>
        <input
          type='text'
          name='price'
          placeholder='Price per Pound' />  
          <br/>
          <br/>
        <input
          type='text'
          name='roast'
          placeholder='Coffee Roast' /> 
          <br/>
          <br/>
        <input
          type='text'
          name='weight'
          placeholder='Bag Weight' /> 
          <br/>
          <br/>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
};

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;