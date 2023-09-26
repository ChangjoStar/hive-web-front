import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

function SectionAccordian(props) {
    return (
        <>
            <Accordion defaultExpanded={true}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">{props.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>{props.children}</AccordionDetails>
            </Accordion>
        </>
    )
}

export default SectionAccordian;
