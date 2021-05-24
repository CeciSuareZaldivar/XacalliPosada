import React from 'react';
// Import CSS
import '../css/drawer.css';
// Import Material UI
  // List
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
  // Nov Link
import { NavLink } from 'react-router-dom';
// Impport Components
  // Icons
import IconClients from './iconClient';
import IconLeads from './iconLead';
import IconReservations from './iconReservations';
import IconEmployees from './iconEmployee';
import IconRecords from './iconRecords';
import IconSuppliers from './iconSupplier';
import IconMarketing from './iconMarketing';



export default function ContainerList() {
    return (
        <div>
            <List>
                <NavLink to="/home/leads">
                    {['Leads'].map((text) => (
                        <ListItem button key={text} className="containerList">
                            <ListItemIcon className="iconDrawerList"><IconLeads/></ListItemIcon>
                            <ListItemText primary={text}  className="txtDrawerList"/>
                        </ListItem>
                    ))}
                </NavLink>

                <NavLink to="/home/reservations">
                    {['Reservaciones'].map((text) => (
                        <ListItem button key={text} className="containerList">
                            <ListItemIcon className="iconDrawerList"><IconReservations/></ListItemIcon>
                            <ListItemText primary={text}  className="txtDrawerList"/>
                        </ListItem>
                    ))}
                </NavLink>  

                <NavLink to="/home/clients">
                    {['Clientes'].map((text) => (
                    <ListItem button key={text} className="containerList">
                        <ListItemIcon className="iconDrawerList"><IconClients/></ListItemIcon>
                        <ListItemText primary={text}  className="txtDrawerList"/>
                    </ListItem>
                    ))}
                </NavLink>  
            </List>

            <Divider />

            <List>
                <NavLink to="/home/users">
                    {['Usuarios'].map((text) => (
                        <ListItem button key={text} className="containerList">
                            <ListItemIcon className="iconDrawerList"><IconEmployees/></ListItemIcon>
                            <ListItemText primary={text}  className="txtDrawerList"/>
                        </ListItem>
                    ))}
                </NavLink>

                <NavLink to="/home/suppliers">
                    {['Proveedores'].map((text) => (
                        <ListItem button key={text} className="containerList">
                            <ListItemIcon className="iconDrawerList"><IconSuppliers/></ListItemIcon>
                            <ListItemText primary={text}  className="txtDrawerList"/>
                        </ListItem>
                    ))}
                </NavLink>  

                <NavLink to="/home/marketing">
                    {['Marketing'].map((text) => (
                    <ListItem button key={text} className="containerList">
                        <ListItemIcon className="iconDrawerList"><IconMarketing/></ListItemIcon>
                        <ListItemText primary={text}  className="txtDrawerList"/>
                    </ListItem>
                    ))}
                </NavLink>  

                <NavLink to="/home/records">
                    {['Registros'].map((text) => (
                    <ListItem button key={text} className="containerList">
                        <ListItemIcon className="iconDrawerList"><IconRecords/></ListItemIcon>
                        <ListItemText primary={text}  className="txtDrawerList"/>
                    </ListItem>
                    ))}
                </NavLink>
            </List>

        </div>
    )
}