import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import logo from '../../../assets/ControlsLeft.png';

const pages = ['Noticias'];

function MenuBarComponent() {
  return (
    <AppBar position="static" style={{ background: '#2E3B55' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} alt="logo" />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MenuBarComponent;
