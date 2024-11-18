import { Box } from "@mui/material";
import DenseAppBar from "../modules/appBar";
import GetCatFacts from "../modules/CardFacts";


function MainPages () {

return (
        <>
        <Box sx={{bgcolor: '#C5D5C9', height: '100vh', width: '100vw'}}>
        <DenseAppBar name="Cat Facts" type='cat' animalColor="#A4C0B6"/>

      <Box sx={{paddingTop: '15px', paddingLeft: '15px'}}>
        <GetCatFacts />
      </Box>
      

      </Box>
    </>
    )
}

export default MainPages;

