import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Link as ReactLink } from "react-router-dom";
import Link from '@mui/material/Link';

export default function Search() {
  const [data, setData] = useState([]);

  const search = useLocation().search;
  const query = new URLSearchParams(search).get('q');

  if (data.length == 0) {
    fetch(`/api/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let query = document.getElementById("input-query").value;

    fetch(`/api/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100vw', height: '100vh' }}>
      <AppBar position="static" sx={{backgroundColor: 'white', boxShadow: "none"}}>
        <Toolbar>
          <Stack direction="row" alignItems="center" spacing={2} sx={{fontSize: '13px'}}>
            <Link component={ReactLink} to="/" underline="none" sx={{color: '#202124'}}>
              <img src="logo.png" style={{height: "28px", width: "86px"}} />
            </Link>
            <form onSubmit={handleSubmit} style={{width: '100%'}}>
              <div style={{backgroundColor: '#fff', display: 'flex', height: '32px', border: '1px solid #dfe1e5', boxShadow: 'none', borderRadius: '24px', margin: '0 auto 0 60px', width: 'auto', width: '690px'}}>
                <div style={{display: 'flex', flex: 1, padding: '0 14px 0 14px'}}>
                  <SearchIcon fontSize="small" sx={{color: '#9aa0a6', paddingRight: '5px', marginTop: 'auto', marginBottom: 'auto'}} />
                  <InputBase id="input-query" defaultValue={query} sx={{ ml: 1, flex: 1}} name="q" />
                </div>
              </div>
            </form>
          </Stack>
          <Box sx={{flexGrow: 1}}></Box>
          <Stack direction="row" alignItems="center" spacing={2} sx={{fontSize: '13px'}}>
            <IconButton aria-label="settings">
              <SettingsIcon />
            </IconButton>
            <IconButton aria-label="apps">
              <AppsIcon />
            </IconButton>
            <Button disableElevation variant="contained" sx={{textTransform: 'none'}}>Sign in</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: "1rem 1rem 1rem 11rem", width: '40vw' }}>
        <Stack spacing={5}>
          {
            data.map(row => (
              <Box>
                <a href={row.url} style={{outline: 0, textDecoration: "none"}}>
                  <Stack direction="row" spacing={1} sx={{paddingBottom: '10px'}}>
                    <img src={`/api/icons/${row.icon}`} style={{width: '16px', height: '16px'}} />
                    <span style={{fontSize: "14px", color: "#202124"}}>{row.url}</span>
                  </Stack>
                  <h3 style={{color: "#1a0dab", fontSize: "20px", lineHeight: "1.3", fontWeight: "400", margin: 0}}>{row.title}</h3>
                </a>
                <p style={{marginTop: 10, fontSize: "14px", color: "#4d5156"}}>{row.description}</p>
              </Box>
            ))
          }
        </Stack>
      </Box>
    </Box>
  );
}