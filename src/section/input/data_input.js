
import * as React from 'react';
import { CloudDownload as CloudDownloadIcon, CloudUpload as CloudUploadIcon } from "@mui/icons-material";
import { Tooltip, Button, Stack } from "@mui/material";

function ButtonWithIcon({ title, startIcon, children, onClick }) {
    return (
        <>
            <Tooltip title={title} arrow>
                <Button component="label" variant="contained" startIcon={startIcon} onClick={onClick}>
                    {title}
                    {children}
                </Button>
            </Tooltip>
        </>
    );
}

function DataInput({ filename, href, onAccept, onDecline, checkFile }) {
    const download = () => {
        if (!!filename && !!href) {
            const link = document.createElement("a");
            link.download = filename;
            link.href = href;
            link.click();
        }
    }

    return (
        <>
            <Stack spacing={1} direction="row">
                <ButtonWithIcon
                    title="예제 파일 다운로드"
                    startIcon={<CloudDownloadIcon />}
                    onClick={download} >
                </ButtonWithIcon>
                <ButtonWithIcon
                    title="파일 업로드"
                    startIcon={<CloudUploadIcon />} >
                    <input
                        type="file"
                        accept=".csv"
                        onChange={(e) => {
                            if (checkFile(e.target.files[0])) onAccept()
                            else onDecline()
                        }}
                        hidden />
                </ButtonWithIcon>
            </Stack>
        </>
    );
}

export default DataInput;
