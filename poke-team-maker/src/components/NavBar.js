import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { navBar } from './styles/styles';

export const NavBar = () => {
    return (
        <AppBar sx={navBar} position="static">
            <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
            </IconButton>
            </Toolbar>
        </AppBar>
    )
}