import * as React from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import AlgorithmRow from "./algorithm_row";

function StatisticsTable({ schools, students }) {
    const [colnames, setColnames] = React.useState([])
    return (
        <>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
                    <TableHead>
                        <TableRow>
                            <TableCell rowSpan={2}>알고리즘</TableCell>
                            <TableCell rowSpan={2}>시드</TableCell>
                            <TableCell colSpan={colnames.length}>통계</TableCell>
                        </TableRow>
                        <TableRow>
                            {
                                colnames.map(colname => <TableCell key={`stat_${colname}`}>{colname}</TableCell>)
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <AlgorithmRow algorithm='TieBreaking' schools={schools} students={students} setColnames={setColnames} prefCount={colnames.length} />
                        <AlgorithmRow algorithm='Sparkling' schools={schools} students={students} setColnames={setColnames} prefCount={colnames.length} />
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default StatisticsTable;
