import React from "react";
import PropTypes from "prop-types";
import formBG from "../img/formBG.jpg";

const ReusableForm = (props) => {
  const formStyledComponentsStyles = {
    backgroundImage: 'url(../src/img/formBG.jpg)',
    width: '250px',
    margin: 'auto'
  }
  return (
    <div style = {formStyledComponentsStyles}>
    <div style = {{backgroundImage: `url(${formBG})`,backgroundSize:'contain', opacity:'0.5'}}>
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
    </div>
  </div>
  );
};

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;