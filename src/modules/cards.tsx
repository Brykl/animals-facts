import { Box, Typography } from "@mui/material";

interface CarTagProps {
    text?: string;
  }

function TemplateCard ({text = "test"} : CarTagProps)  {

    return (
    <Box sx={{bgcolor: '#DBDDCD', minHeight: '50px', height: '100%', width: '150px', padding: '10px',
        '&:hover' : {
            backgroundColor: '#c5c6b8'
        }
    }}>
        <Typography>
            {text}
        </Typography>
    </Box>
    )
}

export default TemplateCard;