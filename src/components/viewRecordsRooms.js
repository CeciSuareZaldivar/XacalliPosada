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
// Import components
import Drawer from './drawer';
import Crm from './crm';
import TemplateTable from './templateTable'
// Import Data Table
import { cols, rows } from './tableRooms.data';


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


function ViewRooms() {
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
    
                        <Link color="inherit" href="/home/records" >
                            Registros
                        </Link>

                        <Typography color="inherit">
                            Cabañas
                        </Typography>
                    </Breadcrumbs>
                    <Crm titulo="Cabañas">
                        <TemplateTable className="table" cols={cols} rows={rows} editRoute="/home/records/rooms"></TemplateTable>
                    </Crm>
                </Grid>
            </Grid>
        </div>
    )
}

export default ViewRooms
