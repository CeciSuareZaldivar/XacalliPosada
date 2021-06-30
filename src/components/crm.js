import React from 'react';
// Import CSS
import '../css/crm.css';
// Import Material UI
  // Grid
import Grid from '@material-ui/core/Grid';
  // Typography
import Typography from '@material-ui/core/Typography';
// Impport Components
  // Button
import ButtonMenuCrm from './button';



class AppCrm extends React.Component {

  render(){

    return (
              
      <main className="mainContent">
        <Grid container spacing={3}>
                
          <div className="containerCrm">
            <Grid className="gridCrm" item xs={12} sm={12} md={12} lg={12} xl={12}>
      
      
              <div className="containerTable">
                {this.props.children}
              </div>
      
            </Grid>
          </div>
        </Grid>
      </main>
       
    )
  }
}
      

export default AppCrm;