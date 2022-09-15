import React from "react";
import PropTypes from "prop-types";
import formBG from "../img/formBG.jpg";

const ReusableForm = (props) => {
  const formStyledComponentsStyles = {
    width: '250px',
    margin: 'auto',
    marginBottom: '50px'
  }

  const textBoxSyledComponentsStyles = {
    height:'25px'
  }

  const buttonStyledComponentsStyles = {
    backgroundColor:'black',
    color:'white',
    fontSize: '20px',
    padding: '10px 60px',
    borderRadius: '5px',
    margin: '10px 0px',
    cursor:'pointer'
  }
  return (
    

    <React.Fragment>
    <div style = {formStyledComponentsStyles}>
     <div style = {{
      backgroundImage: `url(${formBG})`,
      opacity:'.8',
      backgroundSize:'cover', 
      borderRadius: '10px', 
      border: '10px solid black',
      boxShadow: '2px 2px 2px 2px #47290a',
      padding: '20px'}}>

      <form onSubmit={props.formSubmissionHandler}>
        <input style = {textBoxSyledComponentsStyles}
          type='text'
          name='names'
          placeholder='Coffee Name' />
          <br/>
          <br/>
        <input style = {textBoxSyledComponentsStyles}
          type='text'
          name='origin'
          placeholder='Coffee Origin' />
          <br/>
          <br/>
        <input style = {textBoxSyledComponentsStyles}
          type='text'
          name='price'
          placeholder='Price per Pound' />  
          <br/>
          <br/>
        <input style = {textBoxSyledComponentsStyles}
          type='text'
          name='roast'
          placeholder='Coffee Roast' /> 
          <br/>
          <br/>
        <input style = {textBoxSyledComponentsStyles}
          type='text'
          name='weight'
          placeholder='Bag Weight' /> 
          <br/>
          <br/>
        <button type='submit' style={buttonStyledComponentsStyles}>{props.buttonText}</button>
      </form>
      </div>
      </div>
    </React.Fragment>
  );
};

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;