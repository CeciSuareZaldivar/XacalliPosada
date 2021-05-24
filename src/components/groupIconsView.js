import React from 'react';
// Import CSS
import '../css/groupIconsView.css';
// Import Material UI
import IconButton from '@material-ui/core/IconButton';
// Import components
import ButtonEdit from './btnEdit';
import ButtonDelete from './btnDelete';
import ButtonView from './btnView';


function GroupIcons() {
  return (
    <div className="containerGroupIcons">
        <IconButton className="iconButton">
          <ButtonView/>
        </IconButton>
        <IconButton className="iconButton">
          <ButtonEdit/>
        </IconButton>
        <IconButton className="iconButton">
          <ButtonDelete/>
        </IconButton>
    </div>
  );
}

export default GroupIcons;