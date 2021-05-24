import React from 'react';
// Import CSS
import '../css/groupIconsView.css';
// Material UI
  // Checkbox
import Checkbox from '@material-ui/core/Checkbox';
  // Icons
import IconButton from '@material-ui/core/IconButton';
  // Table
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
// Import components
  // Buttons
import ButtonEdit from './btnEdit';
import ButtonDelete from './btnDelete';
import ButtonView from './btnView';



const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row(props) {
  const { row } = props;
  const classes = useRowStyles();

  var rowKeys = Object.keys(row);
  var roomsCol = [];

  if(row.rooms){
    roomsCol = Object.keys(row.rooms[0]);
  }

  console.log(props.editRoute);

  return (
    <React.Fragment>
      <TableRow className={classes.root} hover role="checkbox" align="center">
        <Checkbox/>
        {console.log(roomsCol)}
        {rowKeys.map((key) => (
          key !== "rooms" &&
          <TableCell align="center">
            <Typography>
              {row[key]} 
            </Typography>
          </TableCell>
        ))}

          <TableCell>
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
          </TableCell>
        
      </TableRow>
      {rowKeys.map((key) => (
        key === "rooms" &&
        <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        </TableCell>
      </TableRow>
      ))}
    </React.Fragment>
  );
}


const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
  container: {
    height: '90%',
  },
});

export default function StickyHeadTable(props) {
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
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
          <TableRow>
            {props.cols.map((col) => (
              <TableCell key={col.id}
              align="center"
              style={{ minWidth: col.minWidth }}
            > 
              <Typography>
                { col.title}
              </Typography>
            </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
            return (
              <Row tabIndex={-1} key={row.id} row={row} editRoute={props.editRoute}/>
              );
            })}
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