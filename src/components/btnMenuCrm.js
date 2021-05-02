import React from 'react';
// Import CSS
import '../css/btnMenuCrm.css';


class ButtonMenuCrm extends React.Component {
  render () {
    return (
      <div className="containerBtnMenuCrm">
        <button id="btnMenCrm">
          {this.props.tittle}
        </button>
      </div>
    )
  }
}

export default ButtonMenuCrm;