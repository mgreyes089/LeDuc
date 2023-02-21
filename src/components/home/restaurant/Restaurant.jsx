
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

import { Grid, Box, Divider } from '@mui/material';
function Restaurant () {
    return (
        <>
        <Container id='restaurant' maxWidth="lg">
            <Grid container spacing={1} marginTop={4} marginBottom={4}>
                <Grid item={true} xs={12} sm={6} md={4}>
                    <Box m={4}>
                    <Typography variant="h2" gutterBottom>
                        Restaurant
                    </Typography>
                    <Typography variant="h1" gutterBottom>
                        Le Duc
                    </Typography>
                    </Box>
                </Grid>
                <Divider
                style={{ backgroundColor: "gray" }}
                orientation="vertical"
                flexItem
                />
               
                <Grid item={true} xs={12} sm={6} md={4} >
                    <Box m={8} >
                    <p>Finies les vacances ,nous  sommes de retour !!!!!!!</p>
                    <p>Le restaurant est ouvert du  lundi au samedi pour déjeuner et diner.</p>
                    <p>En temps normal, Nous prenons les réservations au 01 43 22 59 59 et au 01 43 20 96 30 .Le week end et pendant la pause , 06 23 79 32 36 ou dominiq@restaurantleduc.com.</p>
                    <p>Vous pouvez aussi visiter notre instagram</p>
                    </Box>
                </Grid>
                <Divider
                style={{ backgroundColor: "gray" }}
                orientation="vertical"
                flexItem
                />
            
                <Grid item={true} xs={12} sm={6} md={3}>
                    <Box m={7}>
                    <p>Restaurant de poissons et fruits de mer depuis 1967, Le Duc est un rendez vous gastronomique immanquable pour tout amateur de bonne pêche. Un lieu de caractère installé à deux pas des ateliers de César et Dali, dont la carte se dessine suivant les arrivages journaliers.</p>
                    </Box>
                </Grid>
            </Grid>
            
            </Container>
        </>
    )
}

export default Restaurant;
