import * as React from 'react';
import { CloudDownload as CloudDownloadIcon, CloudUpload as CloudUploadIcon } from '@mui/icons-material';
import { Tooltip, Stack, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';

function ButtonWithIcon({ title, startIcon, loading, children, onClick }) {
    return (
        <>
            <Tooltip title={title} arrow>
                <LoadingButton
                    color='primary'
                    component='label'
                    onClick={onClick}
                    loading={loading}
                    loadingPosition="start"
                    startIcon={startIcon}
                    variant="contained"
                >
                    {title}
                    {children}
                </LoadingButton>
            </Tooltip>
        </>
    );
}

function DataInput({ filename, href, onAccept, onDecline, checkFile }) {
    const [loading, setLoading] = React.useState(false)
    const [alert, setAlert] = React.useState(null)
    const [alertMessage, setAlertMessage] = React.useState('')

    const download = () => {
        if (!!filename && !!href) {
            const link = document.createElement('a');
            link.download = filename;
            link.href = href;
            link.click();
        }
    }

    return (
        <>
            <Stack spacing={1} direction='column'>
                <Stack spacing={1} direction='row'>
                    <ButtonWithIcon
                        title='파일 업로드'
                        startIcon={<CloudUploadIcon />}
                        loading={loading} >
                        <input
                            type='file'
                            accept='.csv'
                            onChange={(e) => {
                                if (e?.target?.files.length !== 1) {
                                    setLoading(false)
                                    onDecline()
                                } else {
                                    setLoading(true)
                                    setTimeout(() => {
                                        checkFile(e.target.files[0])
                                            .then(() => {
                                                setAlert(null)
                                                onAccept()
                                            }).catch((e) => {
                                                setAlert(e.name.toLowerCase())
                                                setAlertMessage(`[${e.name}] ${e.message}`)
                                                onDecline()
                                            }).finally(() => {
                                                setLoading(false)
                                            })
                                    }, 500)
                                }
                            }}
                            hidden />
                    </ButtonWithIcon>
                    <ButtonWithIcon
                        title='예제 파일 다운로드'
                        startIcon={<CloudDownloadIcon />}
                        onClick={download}
                        loading={loading} >
                    </ButtonWithIcon>
                </Stack>
                {alert && <Alert severity={alert}>{alertMessage}</Alert>}
            </Stack>
        </>
    );
}

export default DataInput;
