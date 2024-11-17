import { Box, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

interface CardTagProps {
  text?: string;
  _id?: string;
  verified?: boolean;
  source?: string;
  updatedAt?: string;
  createdAt?: string;
  fact: object;
}

function TemplateCard({ text = "test", _id, verified = false, source = 'unknown', updatedAt, createdAt, fact}: CardTagProps) {
  const navigate = useNavigate(); 

  const handleCardClick = () => {
    navigate(`/card/${_id}`, { state: { text, verified, source, updatedAt, createdAt, fact } });  
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
