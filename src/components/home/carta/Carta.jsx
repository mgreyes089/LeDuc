import { Button, Grid, Typography } from "@mui/material";
import './Carta.css'
import { Container } from "@mui/system";
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';

import { useTranslation } from 'react-i18next';


function Carta() {
  const { t, i18n } = useTranslation();
  const parraf1 =
    "Crée par Jean Minchelli à la fin des années 60, homme de la mer et ami du Tout Paris en vogue,&nbsp;Le Duc fait partie de la Nouvelle Vague culinaire qui va déferler sur l’Hexagone: rompant avec les&nbsp;dogmes de la cuisine traditionnelle et bourgeoise, le restaurant ose la simplicité du naturel,&nbsp;réduisant quantité de sauces et temps de cuisson pour gagner en saveur et légèreté. C’est ici&nbsp;qu’apparurent les premiers poissons servis crus, du jamais vu alors! Cette cuisine très actuelle&nbsp;assure au «&nbsp;Duc&nbsp;» longévité et modernité. Signé Slavik, le décor d’origine teinté d’embruns ancre&nbsp;le lieu dans un chic intemporel.";
  const parraf2 =
    "Depuis sa création, qualité et fraicheur sont les maitres mots de cet établissement de haute lignée. Poissons, coquillages et crustacés sont issus des cotes françaises, sortis de l’eau par de petits pêcheurs. La carte suit les marées et les saisons, pour ne livrer que le meilleur des arrivages : homard breton, huitres de Belon ou bar de ligne sont mis en valeur par la simplicité des préparations et la justesse des cuissons. Quant aux épices et aux herbes aromatiques, elles savent révéler la vraie nature de ces produits uniques, qu’ils soient luxueux comme le turbot ou populaires comme la sardine.";
  const parraf3 =
    "Les équipes se succèdent chez Le Duc mais l'esprit Minchelli est toujours là. Dominique Minchelli secondé par Pascal Hélard et Senthuran Vignesvaran  en cuisine fait en sorte que esprit de famille et modernité aillent de pair . L'équipe de salle est présente au rendez vous et s'occupe de tous les clients avec la même attention , que ce soit de vieux habitués ou des futurs .";
  return (
    <Container id='aboutUs' maxWidth="md">
      <Grid container>
        <Grid item xs={12}>
          <Button onClick={() => i18n.changeLanguage('es')}>{i18n.language}</Button>
        
          <Typography align="center"
            variant="h3"
            m={2}
            
          >
            <ScatterPlotIcon/>{t('c_carta_title')}<ScatterPlotIcon/>
          </Typography>
          
        </Grid>
        
        <Grid container id="containerRestaurant">
          
            <Grid item={true} xs={12} sm={6} md={4} className="itemsRestaurant">
              
              <div className="positionImage">
                <img src="/img/h-1.png" alt="h1" className="img" />
              </div>
              <Typography m={2} variant="h6" fontSize={"40px"}>
                {t('c_carta_subtitle1')}
              </Typography>
              <Typography m={2}fontSize={"14px"} display="grid">
                {parraf1}
              </Typography> 
            </Grid>
          
          
            <Grid item={true} xs={12} sm={6} md={4} className="itemsRestaurant">
              <div className="positionImage">
                <img src="/img/h-2.png" alt="h2" className="img" />
              </div>
              <Typography m={2} variant="h6" fontSize={"40px"}>
              {t('c_carta_subtitle2')}
              </Typography>
              <Typography m={2} fontSize={"14px"} display="grid">
                {parraf2}
              </Typography>
            </Grid>
         
            <Grid item={true} xs={12} sm={6} md={4} className="itemsRestaurant">
              <div className="positionImage">
                <img src="/img/h-3.png" alt="h3" className="img" />
              </div>
              <Typography m={2} variant="h6" fontSize={"40px"}>
                {t('c_carta_subtitle3')}
              </Typography>
              <Typography
                fontSize={"14px"}
                justifyContent="center"
                alignItems={"center"}
                display="grid"
                m={2}
              >
                {parraf3}
              </Typography>
            </Grid>
          
        </Grid>
      </Grid>
    </Container>
  );
}
export default Carta;