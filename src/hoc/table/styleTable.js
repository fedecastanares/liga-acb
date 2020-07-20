import React from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.backgroundContrast,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  /*
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  */

  const useStyles = makeStyles((theme) => ({
    table: {
      width: '100%',
      border: `0.2rem solid ${theme.palette.secondary.main}`,
      boxSizing: 'border-box',
      borderRadius: '0.5rem'
    },
    label: {
      color: theme.palette.backgroundContrast,
      fontWeight: 700
    },
    tableBody: {
      backgroundColor: theme.palette.background
    },
  }));
  
  

const StyleTable = ({label, data, datakeys}) => {
    const classes = useStyles();

    if (data.data) {
      const dataRows = (Object.keys(data.data).filter(value => value !== "0"));
      // console.log(data.data)
    return ( 
        <>
        <Typography className={classes.label} variant="h4" gutterBottom>
          {label}
        </Typography>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    {datakeys.map(key => <StyledTableCell key={key}>{data.data[0][key]}</StyledTableCell>
                      )}
                  </TableRow>
                </TableHead>
                <TableBody className={classes.tableBody}>
                  {dataRows.map(row => 
                  <StyledTableRow key={row}>{datakeys.map(key =>
                    <StyledTableCell key={key}>{data.data[row][key]}</StyledTableCell>)}
                  </StyledTableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
        </>
     ); } else
     return (<h1>Cargando</h1>)
}
 
export default StyleTable;