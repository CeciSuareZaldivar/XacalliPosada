import 'date-fns';
import React from 'react';
// Import CSS
import '../css/templateEditLeads.css';
// Import Material UI
    // Scrollable Tab
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
    // Inputs Normal
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
  // Input Date
  import DateFnsUtils from '@date-io/date-fns';
  import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
    // Input Choose
import MenuItem from '@material-ui/core/MenuItem';
    // Acordion
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
    // Grid
import Grid from '@material-ui/core/Grid';
// Components
import ButtonEdit from './btnEdit';
  
 


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const chooseNumberPets = [
  {
    value: '0',
    label: '0                    '
  },
  {
    value: '1',
    label: '1'
  },
  {
    value: '2',
    label: '2'
  },
  {
    value: '3',
    label: '3'
  },
  {
    value: '4',
    label: '4'
  },
  {
    value: '5',
    label: '5'
  },
  {
    value: '6',
    label: '6'
  },
];


const chooseNumberPeople = [
  {
    value: '1',
    label: '1'
  },
  {
    value: '2',
    label: '2'
  },
  {
    value: '3',
    label: '3'
  },
  {
    value: '4',
    label: '4'
  },
  {
    value: '5',
    label: '5'
  },
  {
    value: '6',
    label: '6'
  },
  {
    value: '7',
    label: '7'
  },
  {
    value: '8',
    label: '8'
  },
  {
    value: '9',
    label: '9'
  },
  {
    value: '10',
    label: '10'
  },
  {
    value: '11',
    label: '11'
  },
  {
    value: '12',
    label: '12'
  },
  {
    value: '13',
    label: '13'
  },
  {
    value: '14',
    label: '14'
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: {
        margin: theme.spacing(1),
      },
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
  },
  formDateAndTime: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '27ch',
    },
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '17ch',
    },
  },
  formSmall: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '12ch',
    },
  }
}));


// Function
export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const [value, setValue] = React.useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [numberPets, setnumberPets] = React.useState();

  const handleChangeNumberPets = (event) => {
    setnumberPets(event.target.value);
  };

  const [numberPeople, setnumberPeople] = React.useState();

  const handleChangeNumberPeople = (event) => {
    setnumberPeople(event.target.value);
  };

  return (

    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={8} xl={8} className="containerGridAccordion">
          <div className="containerAccordion">
            <Accordion>
              <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              >
                <Typography className={classes.heading}>Ticket</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ButtonEdit/>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>

              <AccordionDetails>
                <form className={classes.form} noValidate autoComplete="off">
                  <div>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="ID Ticket"
                      controlId="idTicket" 
                      size="small"
                      multiline
                      rowsMax={4}
                      value={value}
                      onChange={handleChange}
                      variant="outlined"
                    />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Fecha de registro"
                    controlId="dateRegistration" 
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                    />
                    </MuiPickersUtilsProvider>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="ID Vendedor"
                      controlId="idEmployee" 
                      size="small"
                      multiline
                      rowsMax={4}
                      value={value}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </div>
                </form>

              
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              >
                <Typography className={classes.heading}>Lead</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>

              <AccordionDetails className="acordionEditLead">
                <div className={classes.form}>
                  <TextField
                  id="outlined-multiline-flexible"
                  label="ID Lead"
                  controlId="idLead" 
                  size="small"
                  multiline
                  rowsMax={4}
                  value={value}
                  onChange={handleChange}
                  variant="outlined"
                  />
                  <TextField
                  id="outlined-multiline-flexible"
                  label="Nombre Lead"
                  controlId="nameLead" 
                  size="small"
                  multiline
                  rowsMax={4}
                  value={value}
                  onChange={handleChange}
                  variant="outlined"
                  />
                  <TextField
                  id="outlined-multiline-flexible"
                  label="Teléfono"
                  controlId="Phone"
                  size="small"
                  multiline
                  rowsMax={4}
                  value={value}
                  onChange={handleChange}
                  variant="outlined"
                  />
                </div>
                <div className={classes.formSmall}>
                  <TextField
                  id="outlined-select-native"
                  select
                  label="No. Mascotas"
                  controlId="numberPets"
                  size="small"
                  value={numberPets}
                  onChange={handleChangeNumberPets}
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                  >
                  {chooseNumberPets.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                  </TextField>
                  <TextField
                  id="outlined-select-native"
                  select
                  label="No. Personas"
                  controlId="numberPeople"
                  size="small"
                  value={numberPeople}
                  onChange={handleChangeNumberPeople}
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                  >
                  {chooseNumberPeople.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                  </TextField>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              >
                <Typography className={classes.heading}>Cabaña</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>

              <AccordionDetails>
                <form className="formRoom" noValidate>
                  <div className={classes.formDateAndTime} >
                    <TextField
                    id="dateTime-local"
                    label="Fecha inicio y Check-In"
                    controlId="dateStartAndCheckIn" 
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    />
                    <TextField
                    id="datetime-local"
                    label="Fecha termino y Check-Out"
                    controlId="dateEndAndCheckOut" 
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    />
                  </div>
                  <div className={classes.form}>
                    <TextField
                    id="outlined-multiline-flexible"
                    label="No. Cabañas"
                    controlId="numberRoom" 
                    size="small"
                    multiline
                    rowsMax={4}
                    value={value}
                    onChange={handleChange}
                    variant="outlined"
                    />
                    <TextField
                    id="outlined-multiline-flexible"
                    label="ID Cabañas"
                    controlId="idRoom" 
                    size="small"
                    multiline
                    rowsMax={4}
                    value={value}
                    onChange={handleChange}
                    variant="outlined"
                    />
                  </div>
                </form>

              </AccordionDetails>

            </Accordion>
            <Accordion>
              <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              >
                <Typography className={classes.heading}>Mascota</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              >
                <Typography className={classes.heading}>Descuento</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              >
                <Typography className={classes.heading}>Servicio</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              >
                <Typography className={classes.heading}>Total de la estadía</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={8} xl={8} className="containerGridTabs">
          <div className="containerTabs">
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Ticket" {...a11yProps(0)} />
                <Tab label="Huésped" {...a11yProps(1)} />
                <Tab label="Cabaña" {...a11yProps(2)} />
                <Tab label="Mascota" {...a11yProps(3)} />
                <Tab label="Descuento" {...a11yProps(4)} />
                <Tab label="Servicios" {...a11yProps(5)} />
              </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
              Ticket
            </TabPanel>

            <TabPanel value={value} index={1}>
              Huésped
            </TabPanel>

            <TabPanel value={value} index={2}>
              Cabaña
            </TabPanel>

            <TabPanel value={value} index={3}>
              Item Four
            </TabPanel>

            <TabPanel value={value} index={4}>
              Item Five
            </TabPanel>

            <TabPanel value={value} index={5}>
              Item Six
            </TabPanel>
          </div>
        </Grid>

      </Grid>
    </div>
  );
}

