import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { navBar, drawer, drawerText } from './styles/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

type Props = {
  setPage: (page: number) => void;
};

export const NavBar = ({setPage}) => {

    const [state, setState] = React.useState(false);

    const openPage = (page) => {
        setPage(page);
        setState(false);
    }

    const menuList = [
        {text: 'Pokemon finder', src: 'pokeball.svg', page: 1},
        {text: 'Pokemon settings', src: 'pikachu.png', page: 2},
        {text: 'Team', src: 'crossed_swords.svg', page: 3},
    ]

    const list = (
        <Box>
          <List>
            {menuList.map((menu) => (
              <ListItem key={menu.text} disablePadding>
                <ListItemButton onClick={() => openPage(menu.page)}>
                  <ListItemIcon>
                    <img style={{width: "40px"}} src={menu.src}/>
                  </ListItemIcon>
                  <ListItemText sx={drawerText} primary={menu.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );

    return (
        <>
        <AppBar sx={navBar} position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon onClick={() => setState(true)}/>
                </IconButton>
            </Toolbar>
        </AppBar>
            <Drawer
                sx={drawer}
                open={state}
                onClose={() => setState(false)}
                >
            {list}
            </Drawer>      
        </>
    )
}