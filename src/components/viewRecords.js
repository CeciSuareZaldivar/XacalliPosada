import React from 'react'
// Import CSS
import '../css/views.css';
// Import Material UI
    // Breadcrumbs
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';  
import Typography from '@material-ui/core/Typography';
    // Grid
import Grid from '@material-ui/core/Grid';
    // Styles
import { makeStyles} from '@material-ui/core/styles';
  // Nov Link
import { NavLink } from 'react-router-dom';
// Import components
import Drawer from './drawer';
import Crm from './crm';
import IconRoom from './iconRoom';
import IconService from './iconService';


const useStyles = makeStyles((theme) => ({
    containerViews: {
    [theme.breakpoints.up('md', 'lg', 'xl')]: {
      display: 'flex',
    },
    [theme.breakpoints.down('xs', 'sm')]: {
      display: 'block',
    },
  },
}));


function ViewRecords() {
    const classes = useStyles();
    return (
        <div  className={classes.containerViews}> 
            <Drawer/>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Breadcrumbs className="breadCrumb">
                        <Link color="inherit" href="/home" >
                            Inicio
                        </Link>
                        <Typography color="inherit">
                            Registros
                        </Typography>
                    </Breadcrumbs>
                    <Crm titulo="Registros">
                        <div className="containerMenuRecords">
                            <Grid container className="menuRecords">
                                <NavLink to="/home/records/rooms">
                                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                        <div className="rooms">
                                            <div className="roomsLeft">
                                                <Typography variant="h4">Cabañas</Typography>
                                            </div>
                                            
                                            <div className="roomsRight">
                                                <IconRoom/>
                                            </div>
                                        </div>
                                    </Grid>
                                </NavLink>

                                <NavLink to="/home/records/services">
                                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>

                                        <div className="services">

                                            <div className="servicesLeft">
                                                <Typography variant="h4">Servicios</Typography>
                                            </div>
                                                
                                            <div className="servicesRight">
                                                <IconService/>
                                            </div>

                                        </div>
                                    </Grid>
                                </NavLink>
                            </Grid>
                        </div>
                        
                    </Crm>
                </Grid>
            </Grid>
        </div>
    )
}

export default ViewRecords
