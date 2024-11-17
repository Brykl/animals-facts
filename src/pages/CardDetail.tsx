import { useLocation } from 'react-router-dom';
import DenseAppBar from "../modules/appBar";
import { Box, Typography } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';

function CardDetailPage() {
  const location = useLocation();
  const text = location.state?.text;  
  const verified = location.state?.verified;  

  return (
    <>
    <Box sx={{bgcolor: '#C5D5C9', height: '100vh', width: '100vw'}}>
    <DenseAppBar />
        <Box sx={{display: 'flex' }}>
            <Typography variant="h6" sx={{paddingTop: 2, paddingLeft: 4}}>
            This fact  {verified ? "has been verified" : "has not been verified"}
                </Typography>
                <VerifiedIcon sx={{ paddingTop: 2, paddingLeft: "10px"}}/>
            </Box>
            <Box sx={{marginLeft: 4, marginTop: 2}}> 
                <Typography variant="h3">Fact:</Typography>
                <Typography variant="h4">{text}</Typography>
            </Box>
        </Box>
    </>
  );
}

export default CardDetailPage;
