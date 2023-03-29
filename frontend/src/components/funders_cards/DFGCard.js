import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const DFGCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ minHeight: "500px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column', position:"relative" }} elevation={5} >
            <Box>
                <CardHeader
                    title="DFG"
                />
                <Divider />
            </Box>
            <CardMedia sx={{
                padding: "1em", maxWidth: 500,
                margin: "0 auto",
            }}
                component="img"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/DFG-logo-blau.svg/2000px-DFG-logo-blau.svg.png"
                alt="Logo for the DFG"
            />
            <CardContent>
                <Typography variant="body1" >
                    We are funded by DFG. To learn more about DFG you can visit their homepage linked below.
                </Typography>
            </CardContent>
            <Box>
                <Divider />
                <CardActions disableSpacing>
                    <Button variant="contained" href="https://www.dfg.de/en/index.jsp">
                        Learn More
                    </Button>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
            </Box>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="h5">About</Typography>
                    <Typography paragraph>
                        
The Deutsche Forschungsgemeinschaft (DFG, German Research Foundation) is the central self-governing research funding 
organisation in Germany. The DFG serves the sciences and humanities and promotes research of the highest quality in 
all its forms and disciplines at universities and non-university research institutions. The focus is on
 funding projects developed by the academic community itself in the area of knowledge-driven research.

The DFG funds research projects, creates competitive opportunities and conducts procedures for the review, evaluation, 
selection and decision of research proposals. It helps shape the overall conditions and standards of academic research. 
The DFG maintains dialogue with society, politics and business and supports the transfer of knowledge. It advises state
 institutions and institutions working in the public interest on issues relating to academic research and research policy.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card >
    );
};

export default DFGCard;
