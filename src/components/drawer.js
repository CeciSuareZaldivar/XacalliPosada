import React from 'react';
// Import CSS
import '../css/drawer.css';
// Import Material UI
  // Drawer
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// Impport Components
import LogoXacalliPosada from './logoXacalliPosada';
import ListContainer from './listContainer';



const drawerWidth = 210;

const useStyles = makeStyles((theme) => ({
appBar: {
  background:'#8671E1',
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  justifyContent: 'flex-start',
},
appBarShift: {
  marginLeft: drawerWidth,
  width: `calc(100% - ${drawerWidth}px)`,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
},
menuButton: {
  marginRight: 36,
},
drawer: {
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  [theme.breakpoints.up('sm')]: {
    width: drawerWidth,
    flexShrink: 0,
  },
},
drawerOpen: {
  background:'#8671E1',
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
},
drawerClose: {
  [theme.breakpoints.down('md', 'lg', 'xl')]: {
    display: 'none',
  },
  background:'#f1ecec',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: theme.spacing(11) + 1,
},
}));



export default function MiniDrawer() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    return (

        <div>
    
            <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  onClick={() => setOpen(!open)}
                  className={clsx(classes.menuButton, {
                      [classes.checar]: open,
                  })}
                  >
                  {open ? <MenuIcon /> : <MenuIcon />}
                  
                </IconButton>
      
              </Toolbar>
            </AppBar>
  
            <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open}),
            }}
            >
            <LogoXacalliPosada/>

            <ListContainer/>

            </Drawer>
        </div>
    )
}