import React, { useEffect, useState } from 'react';
import {useLocation} from "react-router-dom";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function Search() {
  const [data, setData] = useState([]);

  const search = useLocation().search;
  const query = new URLSearchParams(search).get('q');

  if (data.length == 0) {
    fetch(`http://127.0.0.1:8080/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }

  return (
    <Box sx={{ padding: "10rem 1rem 1rem 10rem", width: '40vw' }}>
      <Stack spacing={5}>
        {
          data.map(row => (
            <Box>
              <Stack direction="row" spacing={1} sx={{paddingBottom: '10px'}}>
                <img src={`http://127.0.0.1:8080/icons/${row.icon}`} style={{width: '16px', height: '16px'}} />
                <i>{row.url}</i>
              </Stack>
              <Link href={row.url}>{row.title}</Link>
              <p>{row.description}</p>
            </Box>
          ))
        }
      </Stack>
    </Box>
  );
}