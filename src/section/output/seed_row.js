import * as React from 'react';
import { Alert, TableCell, TableRow, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SendIcon from '@mui/icons-material/Send';

function SendButtonCell({ schools, students, algorithm, seed, setSeedDisabled, setStat, enableDownload, prefCount, setColnames }) {
    const [loading, setLoading] = React.useState(false)
    const [alertMessage, setAlertMessage] = React.useState(null)

    const send = (algorithm, version, seed) => {
        setLoading(true)
        setSeedDisabled(true)
        const url = `http://localhost:8080/${version}/allocator/${algorithm}`
        const formData = new FormData()
        formData.append('seed', seed)
        formData.append('schools', schools)
        formData.append('students', students)
        fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            body: formData
        }).then(async response => {
            switch(response.status) {
                case 200:
                    const text = await response.text()
                    const data = JSON.parse(text)
        
                    setColnames(data['colnames'])
                    setStat(data['stat'])
        
                    if (enableDownload) {
                        const csv = data['csv']
                        const file = new Blob([csv], { type: 'text/csv' })
                        const link = document.createElement('a');
                        link.download = `result_alg_${algorithm}_seed_${seed}.csv`;
                        link.href = URL.createObjectURL(file);
                        link.click();
                    }
        
                    setAlertMessage(null)
                    break
                default:
                    const msg = String.fromCharCode.apply(null, (await response.body.getReader().read()).value)
                    setAlertMessage(msg)
                    break
            }
        }).catch(error => {
            setAlertMessage(error.toString())
        }).finally(() => {
            setLoading(false)
        })
    }


    return (
        <>
            <TableCell colSpan={prefCount}>
                {
                    alertMessage ? <Alert severity='error'>{alertMessage}</Alert> :
                        <LoadingButton
                            onClick={() => send(algorithm, 'v1', seed)}
                            loading={loading}
                            loadingPosition="end"
                            endIcon={<SendIcon />}
                            variant="contained"
                        >
                            {loading ? '배정 진행 중' : '배정 시작'}
                        </LoadingButton>
                }
            </TableCell>
        </>
    );
}

function SeedRow({ schools, students, algorithm, prefCount, setColnames }) {
    const [seed, setSeed] = React.useState(0)
    const [seedDisabled, setSeedDisabled] = React.useState(false)
    const [stat, setStat] = React.useState()
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
                    disabled={seedDisabled}
                    size='small'
                />
            </TableCell>
            {
                stat ? stat.map(i => <TableCell key={`SeedRow_${algorithm}_${i}`}>{i}</TableCell>) :
                    <SendButtonCell
                        schools={schools} students={students}
                        algorithm={algorithm} seed={seed}
                        setSeedDisabled={setSeedDisabled} setStat={setStat}
                        prefCount={prefCount} setColnames={setColnames}
                        enableDownload
                    />
            }
        </TableRow>
    )
}

export default SeedRow;
