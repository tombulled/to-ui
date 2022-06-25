import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';

export default function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100vw', height: '100vh' }}>
      <AppBar position="static" sx={{backgroundColor: 'white'}}>
        <Toolbar>
          <Stack direction="row" alignItems="center" spacing={2} sx={{fontSize: '13px'}}>
            <Link href="#" underline="none" sx={{color: '#202124'}}>About</Link>
            <Link href="#" underline="none" sx={{color: '#202124'}}>Store</Link>
          </Stack>
          <Box sx={{flexGrow: 1}}></Box>
          <Stack direction="row" alignItems="center" spacing={2} sx={{fontSize: '13px'}}>
            <Link href="#" underline="none" sx={{color: '#202124'}}>Gmail</Link>
            <Link href="#" underline="none" sx={{color: '#202124'}}>Images</Link>
            <IconButton aria-label="apps">
              <AppsIcon />
            </IconButton>
            <Button variant="contained" sx={{textTransform: 'none'}}>Sign in</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, width: '100%' }}>
        <div style={{ backgroundColor: 'white', display: 'flex', width: '100%', alignItems: 'center', flexDirection: 'column', minHeight: '92px', maxHeight: '290px', height: 'calc(100vh - 560px)', flexShrink: 0, boxSizing: 'border-box'}}>
          <div style={{height: '100%', marginTop: 'auto', maxHeight: '92px', position: 'relative'}}>
            <img src="logo.png" style={{objectFit: 'contain', objectPosition: 'center bottom', width: 'auto', maxWidth: '100%', maxHeight: '92px'}} />
          </div>
        </div>
        <div style={{ borderRadius: 0, display: 'flex', backgroundColor: 'white', flexGrow: 0, maxHeight: '160px', padding: '20px', height: '120px'}}>
          <form style={{width: '100%'}}>
            <div>
              <div style={{margin: '0 auto', paddingTop: '6px', width: 'auto', maxWidth: '584px', position: 'relative'}}>
                <div style={{backgroundColor: '#fff', display: 'flex', height: '44px', border: '1px solid #dfe1e5', boxShadow: 'none', borderRadius: '24px', margin: '0 auto', width: 'auto', maxWidth: '584px'}}>
                  <div style={{display: 'flex', flex: 1, padding: '0 14px 0 14px'}}>
                    <SearchIcon fontSize="small" sx={{color: '#9aa0a6', paddingRight: '5px', marginTop: 'auto', marginBottom: 'auto'}} />
                    {/* <TextField
                      hiddenLabel
                      defaultValue="Small"
                      variant="outlined"
                      // size="small"
                      sx={{border: 0, height: '34px'}}
                    /> */}
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                    />
                  </div>
                </div>
                <div style={{height: '70px', paddingTop: '10px'}}>
                  <Stack spacing={2} direction="row" sx={{justifyContent: 'center'}} pt={'18px'}>
                    <Button size="medium" sx={{textTransform: 'none', color: '#3c4043', backgroundColor: '#f8f9fa'}}>Google Search</Button>
                    <Button size="medium" sx={{textTransform: 'none', color: '#3c4043', backgroundColor: '#f8f9fa'}}>I'm Feeling Lucky</Button>
                  </Stack>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div style={{ backgroundColor: 'white', flexGrow: 1, flexShrink: 0, boxSizing: 'border-box'}}>
        </div>
      </Box>
      <AppBar position="static" sx={{background: '#f2f2f2', color: '#70757a'}}>
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
