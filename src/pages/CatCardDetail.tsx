import { useLocation } from 'react-router-dom';
import DenseAppBar from "../modules/appBar";
import { Box, Typography } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';

function CardDetailPage() {
    //Нужно переделать, просто передать объект и вытащить нужное
  const location = useLocation();
  const text = location.state?.text;  
  const verified = location.state?.verified;  
  const userName = location.state?.source;   
  const createdAt = location.state?.createdAt;  
  const updateAt = location.state?.updatedAt;
  const date = new Date(updateAt);
  const date1 = new Date(createdAt);

//Нужно переделать, очень много повторений
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const year1 = date1.getFullYear();
    const month1 = String(date1.getMonth() + 1).padStart(2, '0'); 
    const day1 = String(date1.getDate()).padStart(2, '0');
    const hours1 = String(date1.getHours()).padStart(2, '0');
    const minutes1 = String(date1.getMinutes()).padStart(2, '0');
    const seconds1 = String(date1.getSeconds()).padStart(2, '0');
    const formattedUpdatedAt = `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;
    const formattedCreatedAt = `${day1}.${month1}.${year1}, ${hours1}:${minutes1}:${seconds1}`;

  return (
    <>
    <Box sx={{bgcolor: '#C5D5C9', height: '100vh', width: '100vw'}}>
    <DenseAppBar name='Cat Facts' type="cat"/>
        <Box sx={{display: 'flex', color: '#3a55de'}}>
            <Typography variant="h6" sx={{paddingTop: 2, paddingLeft: 4,}}>
            This fact  {verified ? "has been verified" : "has not been verified"}
                </Typography>
                <VerifiedIcon sx={{ paddingTop: 2, paddingLeft: "10px", }}/>
            </Box>
            <Box sx={{paddingTop: 2, paddingLeft: 4,}}>
                <Typography>
                    Created by: {userName}
                </Typography>
                <Typography>
                    Created at: {formattedUpdatedAt}
                </Typography>
                <Typography>
                    Last update at: {formattedCreatedAt}
                </Typography>
            </Box>
            <Box sx={{marginLeft: 4,marginRight: 2, marginTop: 2}}> 
                <Typography variant="h3">Fact:</Typography> 
                <Typography variant="h4">{text}</Typography>
            </Box>
        </Box>
    </>
  );
}

export default CardDetailPage;
