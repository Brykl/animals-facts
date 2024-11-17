import React from "react";
import { Box } from "@mui/material";

interface CircleTagProps {
  color?: string;
  size?: number;  
}

export default function CircleTag({ color = "blue", size = 50 }: CircleTagProps) {
  return (
    <Box
      sx={{
        width: size,   
        height: size, 
        borderRadius: "50%",  
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: size / 2,  
      }}
    >
    </Box>
  );
}
