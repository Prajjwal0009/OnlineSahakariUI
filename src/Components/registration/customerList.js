import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from "axios";
import { getCustomerLists} from "../../apiCalls/login";
import {AppBar, IconButton, Toolbar} from "@material-ui/core";
import {classes} from "istanbul-lib-coverage";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const columns = [
    { id: 'id', label: 'Id', minWidth: 170 },
    { id: 'name', label: 'name', minWidth: 100 },
    {
        id: 'address',
        label: 'Address',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'contact',
        label: 'Contact',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'Date',
        label: 'startDate',
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'Date',
        label: 'endDate',
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'id',
        label: 'areaId',
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'action',
        label: 'Action',
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
];

function createData(id,name, address, contact,startDate,endDate,areaId) {
    /* const density = population / size;
     return { name, code, population, size, density };*/
}

const rows = [
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function CustomerList() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [customerList, setCustomerLists] = React.useState([]);

    useEffect(() => {
        getCustomerLists().then(r=>console.log(r))
    });

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Button color="inherit" onClick={(e)=>window.location.href='/home'}>OnlineSahakari</Button>
                    </Typography>
                    <div class="log-in">
                        <Button color="inherit" onClick={(e)=>window.location.href='/customerList'}>Customer</Button>
                        <Button color="inherit" onClick={(e)=>window.location.href='/collectorList'}>Collector</Button>
                        <Button color="inherit" onClick={(e)=>window.location.href='/collectionList'}>Collection</Button>
                    </div>
                </Toolbar>
            </AppBar>
            <button color="inherit" onClick={(e)=>window.location.href='/registration'}>AddCustomer</button>
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customerList.map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column,index) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {index === columns.length - 1 ?
                                                    <div style={{display: "flex", justifyContent: "space-around"}}>
                                                        <Button>Edit</Button><Button>Delete</Button>
                                                    </div> : column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
        </div>
    );
}
