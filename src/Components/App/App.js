import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function App() {
  return (
    <Box 
    sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      height: '100vh'
    }}
    >
      <AppBar position="static">
        <Toolbar>
        </Toolbar>
      </AppBar>
      <Box
      color="primary"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        width: '100%',
        background: 'red'
      }}
    >
      <Paper elevation={0} sx={{ borderRadius: 0, display: 'flex', backgroundColor: 'blue', width: '100%', flexGrow: 1}}></Paper>
      <Paper elevation={0} sx={{ borderRadius: 0, display: 'flex', backgroundColor: 'pink', width: '100%', flexGrow: 1}}></Paper>
      <Paper elevation={0} sx={{ borderRadius: 0, display: 'flex', backgroundColor: 'yellow', width: '100%', flexGrow: 1}}></Paper>
    </Box>
      <AppBar color="primary" position="static">
        <Toolbar variant="dense">
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="body2" component="div">
            &#127808; Carbon neutral since 2007
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
