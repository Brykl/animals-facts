import { Box } from "@mui/material";

interface CircleTagProps {
  colorDefault?: string;
  colorHover?: string;
  size?: number;  
}

export default function CircleTag({ colorDefault = "blue", size = 50, colorHover = '#81b0b8' }: CircleTagProps) {
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
    >
    </Box>
  );
}
