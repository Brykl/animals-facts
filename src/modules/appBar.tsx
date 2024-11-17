
import CircleTag from './circle';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function DenseAppBar() {

    const navigate = useNavigate(); 

    const handleHeaderClick = () => {
      navigate(`/cat`);  
    };



  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            bgcolor: "#A4C0B6",
            height: '10vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
            position: 'relative',  // Нужно для позиционирования круга относительно AppBar
          }}
        >
          <Box sx={{
            position: 'absolute',  
            right: '20px',          
            top: '50%',            
            transform: 'translateY(-50%)',  
          }}>
            <Box sx={{display: 'flex', gap: 2  }}>
            <CircleTag color='white' size={20} />
            <CircleTag color='white' size={20} />
            <CircleTag color='white' size={20} />
            </Box>
          </Box>

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
                '&:hover': {
                    color: "gray"
                } 
              }}
              onClick={handleHeaderClick} 
            >
                Cat Facts
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{
        height: '1.2vh',
        bgcolor: 'white'
      }}></Box>
    </>
  );
}
