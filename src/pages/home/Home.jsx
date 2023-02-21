import './Home.css';
import NavBar from "../../components/core/NavBar";
import Banner from "../../components/home/banner/Banner";
import Restaurant from "../../components/home/restaurant/Restaurant";
import Box from "@mui/material/Box";

import Fish from '../../components/home/carta/Fish';
import Carta from '../../components/home/carta/Carta';
import Banner2 from '../../components/home/banner/Banner2';
import Maps from '../../components/home/restaurant/Maps';




function Home() {
  return (
    <>
        <NavBar />
        <Box style={{ marginTop: '124px' }}>
            <Banner />
        </Box>
        
        <Restaurant />
        <Fish  />
        <Carta />
        <Box maxWidth='lg' style={{ marginTop: '24px' }}>
            <Banner2 />
        </Box>
        <Maps />
        
        
    </>
  );
}

export default Home;
