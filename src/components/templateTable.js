import React from 'react';
// Import CSS
import '../css/groupIconsView.css';
// Material UI
  // Checkbox
import Checkbox from '@material-ui/core/Checkbox';
  // Icons
import IconButton from '@material-ui/core/IconButton';
  // Table
import { lighten, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import AddIcon from '@material-ui/icons/Add';


import TextField from '@material-ui/core/TextField';
// Import components
  // Buttons
import ButtonEdit from './btnEdit';
import ButtonDelete from './btnDelete';
import ButtonView from './btnView';

const useStylesButton = makeStyles((theme) => ({
  containerButtonView: {
    [theme.breakpoints.up('sm', 'md')]: {
      display: 'none',
    }
  },
}));

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}



function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, col } = props;
  var colKeys = Object.keys(col);
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  console.log(props.editRoute);

  return (
      <TableHead>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {colKeys.map((key) => (
          <TableCell
            key={col.id}
            sortDirection={orderBy === col.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === col.id}
              direction={orderBy === col.id ? order : 'asc'}
              onClick={createSortHandler(col.id)}
            >
              {col[key]}
              {orderBy === col.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableHead>
  );
}


EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));


const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (

    <Toolbar
    className={clsx(classes.root, {
      [classes.highlight]: numSelected > 0,
    })}
    >
      {numSelected > 0 ? (
          <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
            {numSelected} seleccionada
          </Typography>
        ) : (
          <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
            Leads
          </Typography>
        )
      }

      {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <div class="tableIcons">
            <IconButton>
              <FilterListIcon />
            </IconButton>
            <IconButton>
              <AddIcon />
            </IconButton>
            </div>
        )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  paper: {
    width: '100%',
    height: '95%',
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  container: {
    height: '80%',
  },
}));


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});



function Row (props) {
  const classes = useStylesButton();
  const { row } = props;

  var rowKeys = Object.keys(row);

  console.log(props.editRoute);

  return (
    <React.Fragment>
      <TableRow 
      role="checkbox" 
      align="center"
      >

        {rowKeys.map((key) => (
          
          <TableCell 
          align="center">
            <Typography>
              {row[key]} 
            </Typography>
          </TableCell>
        ))}
          <TableCell>

            <div className="containerGroupIcons">
                <div className={classes.containerButtonView}>
                  <IconButton className="iconButton">
                    <ButtonView/>
                  </IconButton>
                </div>
                
                <IconButton className="iconButton">
                  <ButtonEdit/>
                </IconButton>
            </div>
            
          </TableCell>
        
      </TableRow>
    </React.Fragment>
  );
}

export default function StickyHeadTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [dense, setDense] = React.useState(false);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = props.rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.rows.length - page * rowsPerPage);

  return (
    <Paper className={classes.root}>
      <EnhancedTableToolbar numSelected={selected.length} />
      <TableContainer component={Paper} className={classes.container}>
        <Table
        className={classes.table}
        aria-labelledby="tableTitle"
        size={dense ? 'small' : 'medium'}
        aria-label="enhanced table"
        >
          <TableHead>
          <TableRow>
            {props.cols.map((col) => (
              <TableCell 
              key={col.id}
              align="center"
            > 
              <Typography>
                { col.label}
              </Typography>
            </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <div>

          <TextField 
          id="outlined-search" 
          label="Search field" 
          type="search" 
          variant="outlined" 
          />

          <TextField 
          id="outlined-search" 
          label="Search field" 
          type="search" 
          variant="outlined" 
          />

        </div>

        <TableBody>
          {props.rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {

              return (
                
               <Row 
               tabIndex={-1} 
               key={row.id} 
               row={row} 
               editRoute={props.editRoute}
               />

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
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Ancho"
        className={classes.from}
      />
    </Paper>
  );
}