import { Box } from "@mui/material";
import DenseAppBar from "../modules/appBar";


function HorsePage ( ) {

    return (
        <>
        <Box sx={{bgcolor: '#cc91b8', height: '100vh', width: '100vw'}}>
        <DenseAppBar name='A Horse Fact' type="horse" animalColor="#b86a9d"/>
        </Box>
        </>
    )
}

export default HorsePage;