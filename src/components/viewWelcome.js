import React from 'react'
// Import CSS
import '../css/views.css';
// Import img
import MotivationalPhraset from '../img/motivationalPhrase.svg';
// Import Material UI
    // Breadcrumbs
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
    // Grid
import Grid from '@material-ui/core/Grid';
    // Styles
import { makeStyles} from '@material-ui/core/styles';
// Import components
import Drawer from './drawer';
import Crm from './crm';


const useStyles = makeStyles((theme) => ({
    containerViews: {
    [theme.breakpoints.up('md', 'lg', 'xl')]: {
      display: 'block',
    },
    [theme.breakpoints.down('xs', 'sm')]: {
      display: 'block',
    },
  },
}));


function ViewLeads() {
  const classes = useStyles();
  return (
      <div  className={classes.containerViews}> 
          <Drawer/>
          <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Breadcrumbs className="breadCrumb">
                        <Typography color="inherit">Inicio</Typography>
                    </Breadcrumbs>
                    <Crm titulo="You Can Do It :)" className="containerCrm">
                        <div className="containerImg">
                            <img src={MotivationalPhraset} className="motivationalPhraset" alt="motivational_phraset" editRoute="/home/"/>
                        </div>
                    </Crm>
              </Grid>
          </Grid>
      </div>
  )
}

export default ViewLeads