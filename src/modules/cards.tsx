import { Box, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

interface CarTagProps {
  text?: string;
  _id?: number;
  verified?: boolean;
}

function TemplateCard({ text = "test", _id = 0, verified }: CarTagProps) {
  const navigate = useNavigate(); 

  const handleCardClick = () => {
    navigate(`/card/${_id}`, { state: { text, verified } });  
  };

  return (
    <Box
      sx={{
        bgcolor: '#DBDDCD',
        minHeight: '50px',
        height: '100%',
        width: '150px',
        padding: '10px',
        '&:hover': {
          backgroundColor: '#c5c6b8'
        }
      }}
      onClick={handleCardClick} 
    >
      <Typography>{text}</Typography>
    </Box>
  );
}

export default TemplateCard;
