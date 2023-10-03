import * as React from 'react';
import { Button, TableCell, TableRow } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SeedRow from './seed_row';

const AlgorithmRow = ({ schools, students, algorithm, prefCount, setColnames }) => {
    const [count, setCount] = React.useState(2)
    const [rows, setRows] = React.useState([])

    const addRow = () => {
        setCount(count + 1)
        setRows([...rows, (
            <SeedRow
                key={`SeedRow_${algorithm}_${count}`}
                schools={schools} students={students}
                algorithm={algorithm}
                prefCount={prefCount} setColnames={setColnames} />
        )])
    }
    return (
        <>
            <TableRow key={`AlgorithmRow_${algorithm}`}>
                <TableCell rowSpan={rows.length + 2}>{algorithm}</TableCell>
            </TableRow>
            {rows.map(row => row)}
            <TableRow key={`AlgorithmRow_add`}>
                <TableCell colSpan={prefCount + 2}>
                    <Button variant="contained" startIcon={<AddIcon />} onClick={addRow}>
                        열 추가
                    </Button>
                </TableCell>
            </TableRow>
        </>
    );
}

export default AlgorithmRow;
