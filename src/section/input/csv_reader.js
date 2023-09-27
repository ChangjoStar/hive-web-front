import * as React from 'react';
import { CloudDownload as CloudDownloadIcon, CloudUpload as CloudUploadIcon, ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { Card, CardHeader, IconButton, Typography, Tooltip, Collapse, styled, CardContent, Button, Stack } from "@mui/material";

function ButtonWithIcon(props) {
    const { title, startIcon, children } = props
    return (
        <>
            <Tooltip title={title} arrow>
                <Button component="label" startIcon={startIcon}>
                    {title}
                    {children}
                </Button>
            </Tooltip>
        </>
    );
}

function FileDownloadButton() {
    const title = "예제 파일 다운로드"
    return (
        <>
            <ButtonWithIcon
                title={title}
                startIcon={<CloudDownloadIcon />}
            />
        </>
    );
}

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
function FileUploadButton() {
    const title = "파일 업로드"
    return (
        <>
            <ButtonWithIcon
                title={title}
                startIcon={<CloudUploadIcon />}
            >
                <VisuallyHiddenInput type="file" />
            </ButtonWithIcon>
        </>
    );
}

const ExpandMoreButton = styled((props) => {
    const { expand, ...other } = props
    return (
        <>
            <Tooltip title={!expand ? '더보기' : '숨기기'} arrow>
                <IconButton {...other} />
            </Tooltip>
        </>
    );
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))

function CsvData(props) {
    const { expand, unmountOnExit } = props
    return (<>
        <Collapse in={expand} unmountOnExit={unmountOnExit}>
            <CardContent>
                <table>
                    <th>학교명</th>
                    <th>남학생수</th>
                    <th>여학생수</th>
                    <tr>
                        <td>A</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </table>
            </CardContent></Collapse>
    </>);
}

function CsvReader(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return (
        <>
            <Card>
                <CardHeader
                    title={
                        <Tooltip title={props.children} arrow>
                            <Typography variant="h6" onClick={handleExpandClick}>{props.title}</Typography>
                        </Tooltip>
                    }
                    action={
                        <>
                            <Stack spacing={1} direction="row">
                                <FileDownloadButton />
                                <FileUploadButton />
                                <ExpandMoreButton
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="더보기"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMoreButton>
                            </Stack>
                        </>
                    }
                />
                <CsvData expand={expanded} unmountOnExit />
            </Card>
        </>
    );
}

export default CsvReader;
