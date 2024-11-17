import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function DenseAppBar() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#A4C0B6",
          height: '10vh',
        }}
      >
        <Toolbar
          variant="dense"
          sx={{
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center',   
            height: '100%',         
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: '45px',
              lineHeight: 1, 
              textAlign: 'center', 
            }}
          >
            Cat Facts
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <Box sx={{
        height: '3vh',
        bgcolor: 'white'
    }}>

    </Box>
    </>
  );
}
