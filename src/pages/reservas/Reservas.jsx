import { Box } from '@mui/material';
import React from 'react';
import NavBar from '../../components/core/NavBar';
import ReservasPage from './ReservasPage';
//import Server from '../../components/home/server/server'



const Reservas = () => {



    return (
        <>
           <NavBar />
            <Box style={{ marginTop: '124px' }}>
                <ReservasPage />
            </Box>
        </>
    );               
}

export default Reservas;
