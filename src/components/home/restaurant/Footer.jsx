
import { Box, Button, Divider, Typography } from '@mui/material';
import React from 'react';
import { ThemeContext } from '../../..';


const Footer = () => {
    return (
    <>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
        <ThemeContext.Consumer>
        {({ theme, changeTheme}) => <Button variant="contained" onClick={changeTheme}>click {theme}</Button>}
        </ThemeContext.Consumer>
        </Box>
        <Box mt= {5} sx={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column' }}>
        <Typography align="right" variant="body2" color="text.secondary">
        'Copyright © '
        </Typography>
        <Divider/>
        <Typography align="right" variant="body1" color="text.secondary" gutterBottom >
        made with Materual UI  {' '}
        
        
        {new Date().getFullYear()}
        {'.'}
        </Typography>
        
        
        </Box>
    </>
    );
}

export default Footer;
