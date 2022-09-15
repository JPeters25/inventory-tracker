import React from "react";

function Header(){
  const headerStyledComponentsStyles = {
    fontFamily: 'EspressoBeans',
    textAlign: 'center',
    fontSize: '32px'
  }
  return (
    <div style= {headerStyledComponentsStyles}>
      <h1>Coffee Tracker</h1>
    </div>
  );
}

export default Header;