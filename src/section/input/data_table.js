import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar } from "@mui/material";

function DataTable({ prefix, data, hidden }) {
    return (
        <>
            <TableContainer component={Paper} hidden={hidden}>
                <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
                    <TableHead>
                        <TableRow>
                            {data && data.header.map((colname) => <TableCell key={`${prefix}_${colname}`}>{colname}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data && data.data.map((row, ri, array) => (
                            <TableRow key={`${prefix}_${ri}`}>
                                {row.map((cell, ci, array) => <TableCell key={`${prefix}_${ri}_${ci}`}>{cell}</TableCell>)}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Toolbar></Toolbar>
            </TableContainer>
        </>
    );
}

export default DataTable;
