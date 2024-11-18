
import CircleTag from './circle';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';



interface NamePage  {
    name: string;
    type: animalType;
    animalColor: string;
}

type animalType = 'cat' | 'dog' | 'horse';
 
export default function DenseAppBar({name, type, animalColor}: NamePage) {

    const navigate = useNavigate(); 

    const handleHeaderClick = () => {
      navigate(`/${type}`); 
      console.log('move at dog page');
    };


const colorNavigation: animalType = type;


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            bgcolor: animalColor,
            height: '10vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
            position: 'relative', 
            
          }}
        >
          <Box sx={{
            position: 'absolute',  
            right: '20px',          
            top: '50%',            
            transform: 'translateY(-50%)',  
          }}>
            <Box sx={{display: 'flex', gap: 2  }}>
            <CircleTag colorDefault={colorNavigation === 'cat' ? '#6d88b5' : 'white'}
             colorHover={colorNavigation === 'cat' ? '#6d88b5' : '#81b0b8'} type={'cat'} size={20} />
            <CircleTag colorDefault={colorNavigation === 'dog' ? '#6d88b5' : 'white'}
             colorHover={colorNavigation === 'dog' ? '#6d88b5' : '#81b0b8'} type={'dog'} size={20} />
            <CircleTag colorDefault={colorNavigation === 'horse' ? '#6d88b5' : 'white'}
             colorHover={colorNavigation === 'horse' ? '#6d88b5' : '#81b0b8'} type={'horse'} size={20} />
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
                {name}
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
