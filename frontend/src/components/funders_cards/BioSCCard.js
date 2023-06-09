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


const BioSCCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ minHeight: "500px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column', position:"relative" }} elevation={5} >

            <CardMedia sx={{
                padding: "1em", maxWidth: 400,
                margin: "auto",
            }}
                component="img"
                image="https://www.biosc.de/lw_resource/datapool/systemfiles/elements/images/691c994f-f902-11e6-8c78-dead53a91d31/current/image/BioSC-Logo-330x230.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body1" >
                    We are funded by BioSC. To learn more about BioSC you can visit their homepage linked below.
                </Typography>
            </CardContent>
            <Box>
                <Divider />
                <CardActions disableSpacing>
                    <Button variant="contained" href="https://www.biosc.de/">
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
                    Central topics in the BioSC are the sustainable production of plants as food and feed and biomass, new bio-/chemocatalytic 
                    and biotechnological methods and processes for the conversion of renewable raw materials into valuable materials such as 
                    fine chemicals, proteins, enzymes, biopolymers, biofuels. Questions of the economic feasibility of the bioeconomy and its 
                    social acceptance are also dealt with. Close cooperation with industry should accelerate the economic implementation of the research results. 
                    The BioSC currently includes around 1900 employees from 67 member institutes from the partner institutions.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card >
    );
};

export default BioSCCard;