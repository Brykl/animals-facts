import { Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';

interface CircleTagProps {
  colorDefault?: string;
  colorHover?: string;
  size?: number;
  type: string;  
}

export default function CircleTag({ colorDefault = "blue", size = 50, colorHover = '#81b0b8', type }: CircleTagProps) {


    const navigate = useNavigate(); 


const handleCircleClick = () => {
    navigate(`/${type}`); 
}

  return (
    <Box
      sx={{
        width: size,   
        height: size, 
        borderRadius: "50%",  
        backgroundColor: colorDefault,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: size / 2,
        '&:hover': {
           bgcolor: colorHover, 
        }  
      }}

     onClick={handleCircleClick}>
    </Box>
  );
}
