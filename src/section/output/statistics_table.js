import React from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { parseTextToCsv } from "../input/read_csv";

function StatisticsTable({ schools, students }) {
    const SeedRow = () => {
        const [seed, setSeed] = React.useState(0)

        const send = (algorithm, version, seed) => {
            let formData = new FormData()
            formData.append('schools', schools)
            formData.append('students', students)
            formData.append('seed', seed)
            fetch(`http://localhost:8080/allocator/${algorithm}/${version}`, {
                method: 'POST',
                credentials: 'same-origin',
                body: formData
            }).then(async response => {
                const text = await response.text()
                // const data = parseTextToCsv(text, '\n', ',')
                parseTextToCsv(text, '\n', ',')
                const file = new Blob([text], { type: 'text/csv' })
                const link = document.createElement('a');
                link.download = `result_alg_${algorithm}_seed_${seed}.csv`;
                link.href = URL.createObjectURL(file);
                link.click();
            }).catch(console.error)
        }

        return (
            <TableRow>
                <TableCell>
                    <TextField
                        type='number'
                        label='seed'
                        InputProps={{
                            inputProps: { min: 0, max: 10 }
                        }}
                        onChange={(e) => {
                            const value = e.target.value
                            setSeed(value)
                        }}
                        value={seed}
                    />
                </TableCell>
                <TableCell>
                    <LoadingButton onClick={() => send('sparkling', 'v2', seed)} >test</LoadingButton>
                </TableCell>
                <TableCell>통계</TableCell>
                <TableCell>통계</TableCell>
                <TableCell>통계</TableCell>
            </TableRow>
        )
    }

    const AlgorithmRow = ({ algorithm }) => {
        const [count, setCount] = React.useState(2)
        const [rows, setRows] = React.useState([])

        const addRow = () => {
            setCount(count + 1)
            setRows([...rows, (<SeedRow key={`SeedRow_${algorithm}_${count}`} />)])
        }
        return (
            <>
                <TableRow key={`AlgorithmRow_${algorithm}`}>
                    <TableCell rowSpan={count}>{algorithm}</TableCell>
                </TableRow>
                {rows.map(row => row)}
                <TableRow key={`AlgorithmRow_add`}>
                    <TableCell colSpan={5}>
                        <Button onClick={addRow}>+</Button>
                    </TableCell>
                </TableRow>
            </>
        );
    }

    return (
        <>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
                    <TableHead>
                        <TableRow>
                            <TableCell rowSpan={2}>알고리즘</TableCell>
                            <TableCell rowSpan={2}>시드</TableCell>
                            <TableCell rowSpan={2}>배정 버튼</TableCell>
                            <TableCell colSpan={3}>통계</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>1지망</TableCell>
                            <TableCell>2지망</TableCell>
                            <TableCell>3지망</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <AlgorithmRow algorithm='Tie-Breaking' schools={schools} students={students} />
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
    // return (
    //     <>
    //         <TableContainer component={Paper} hidden={hidden}>
    //             <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
    //                 <TableHead>
    //                     <TableRow>
    //                         {data && data.header.map((colname) => <TableCell key={`${prefix}_${colname}`}>{colname}</TableCell>)}
    //                     </TableRow>
    //                 </TableHead>
    //                 <TableBody>
    //                     {data && data.data.map((row, ri, array) => (
    //                         <TableRow key={`${prefix}_${ri}`}>
    //                             {row.map((cell, ci, array) => <TableCell key={`${prefix}_${ri}_${ci}`}>{cell}</TableCell>)}
    //                         </TableRow>
    //                     ))}
    //                 </TableBody>
    //             </Table>
    //         </TableContainer>
    //     </>
    // );
}

export default StatisticsTable;
