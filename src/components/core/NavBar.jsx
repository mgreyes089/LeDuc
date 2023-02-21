import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useScrollTrigger} from "@mui/material";
import './NavBar.css';
import { ThemeContext } from '../..';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const drawerWidth = 240;
const navItems = [
  {
    path: "/reservas",
    nombre: 'Reservas'
  },
  {
    path: "/", 
    nombre: 'Home'
  },
  {
    path: "/#restaurant",
    nombre: 'Restaurante'
  },
  {
    path: "/#carta", 
    nombre: 'Carta'
  },
  {
    path: "/#aboutUs",
    nombre: 'AboutUs'
  },
];

const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}
function getBackToTop() { window.scrollTo({
    top: 0,
    left: 0, 
    behavior: 'smooth'});
}


function ShrinkScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 62,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        className: trigger ? 'no-shrink' : 'shrink'
    });
}

function NavBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Le Duc 
            </Typography>
            <Divider />
            <List>
                {navItems.map(({path, nombre}, i) => (
                    <ListItem key={i} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            { path.includes('#') ?
                            <HashLink scroll={scrollWithOffset} to={path}>{nombre}</HashLink> :
                            <NavLink  onClick={getBackToTop} to={path}>{nombre}</NavLink>
                            }
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <ShrinkScroll {...props}>
                    <AppBar color="secondary" enableColorOnDark={true} position="fixed" elevation={0}>
                        <Toolbar sx={{ justifyContent: 'space-between' }} variant="regular">
                            <ThemeContext.Consumer>
                                {({theme}) => (
                                    <>
                                        <Box sx={{ mr: 2, display: { sm: 'none' } }} style={{ width: '100%' }}>
                                            <IconButton
                                                color="inherit"
                                                aria-label="open drawer"
                                                edge="start"
                                                onClick={handleDrawerToggle}
                                            >
                                                <MenuIcon />
                                            </IconButton>
                                            <NavLink to= "/">
                                                <img onClick={getBackToTop} src={theme === 'light' ? "/img/logo.png" : "/img/logo-dark.png"} alt="Logo" height="32" className="absolute-center"/>
                                            </NavLink>
                                        </Box>
                                        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                                            <NavLink to= "/">
                                                <img onClick={getBackToTop} src={theme === 'light' ? "/img/logo.png" : "/img/logo-dark.png"} alt="Logo" height="32" />
                                            </NavLink>
                                        </Box>
                                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                            {navItems.map(({path, nombre}, i) => (
                                                <Button key={i} color='inherit'>
                                                    {  path.includes('#')  ?
                                                    <HashLink scroll={scrollWithOffset} to={path}>{nombre}</HashLink> :
                                                    <NavLink  onClick={getBackToTop} to={path}>{nombre}</NavLink>
                                                    }
                                                </Button>
                                            ))}
                                        </Box>
                                    </>
                                )  }
                            </ThemeContext.Consumer>
                            
                        </Toolbar>
                    </AppBar>
                </ShrinkScroll>
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>
        </>
    );
}

export default NavBar;
