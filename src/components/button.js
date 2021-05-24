import React from 'react';
// Import CSS
import '../css/button.css';
// Import Material UI
import Typography from '@material-ui/core/Typography';


class Button extends React.Component {

    render () {
      return (

        <div className="containerButton">
            <button id="btnMenuCrm">
              <Typography>{this.props.tittle}</Typography>
            </button>
        </div>
      )
    }
  }
  
export default Button;