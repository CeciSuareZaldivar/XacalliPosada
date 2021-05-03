import React from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// Import CSS
import '../css/groupIconsView.css';
// Import components
import ButtonEdit from './btnEdit';
import ButtonDelete from './btnDelete';



const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  var rowKeys = Object.keys(row);
  var roomsCol = [];

  if(row.rooms){
    roomsCol = Object.keys(row.rooms[0]);
  }

  console.log(props.editRoute);

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        {console.log(roomsCol)}
        {rowKeys.map((key) => (
          key !== "rooms" &&
          <TableCell align="center">{row[key]}</TableCell>
        ))}

        
          <TableCell>
            <div className="containerGroupIcons">
            {rowKeys.map((key) => (
              key === "rooms" &&
                <IconButton  aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            ))}
              
              <ButtonEdit editRoute={props.editRoute}/> 
              <ButtonDelete/>
            </div>
          </TableCell>
        
        
      </TableRow>
        
      {rowKeys.map((key) => (
        key === "rooms" &&
        <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Datos Cabaña
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                  {roomsCol.map((col) => (
                    <TableCell align="left">{col}</TableCell>
                  ))}

                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.rooms.map((roomsRow) => (
                    <TableRow key={roomsRow.numberRooms}>

                      {roomsCol.map((col) => (
                        <TableCell align="left">{roomsRow[col]}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      ))}

      
    </React.Fragment>
  );
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function CollapsibleTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);

  };
  return (
    <Paper className={classes.root}>
      <TableContainer component={Paper} className={classes.container}>
        <Table aria-label="collapsible table">
          <TableHead>
          <TableRow>
            {props.cols.map((col) => (
              <TableCell align="left">{col.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <Row key={row.id} row={row} editRoute={props.editRoute}/>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={props.rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}