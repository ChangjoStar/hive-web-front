import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

function Section({ title, defaultExpanded, disable, children }) {
    return (
        <>
            <Accordion defaultExpanded={defaultExpanded} disabled={disable}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>{children}</AccordionDetails>
            </Accordion>
        </>
    )
}

export default Section;
