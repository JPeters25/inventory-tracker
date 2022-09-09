import React from "react";

function Header(){
  const headerStyledComponentsStyles = {
    textAlign: 'center'
  }
  return (
    <div style= {headerStyledComponentsStyles}>
      <h1>Inventory Tracker</h1>
    </div>
  );
}

export default Header;