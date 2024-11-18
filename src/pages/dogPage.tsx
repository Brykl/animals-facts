import { Box, Button, Typography } from "@mui/material";
import DenseAppBar from "../modules/appBar";
import { useEffect, useState } from "react";

function DogPage() {

    
        const [dogUrl, setDogUrl] = useState<string>('');
        const [randomDogFact, setRandomDogFact] = useState<string>('');

        const getDogImage = async () => {
            try {
            const [imageResponse, factsResponse] = await Promise.all([
                fetch('https://dog.ceo/api/breeds/image/random'),
                fetch('https://dog-api.kinduff.com/api/facts?number=5')
            ]);

            if(!imageResponse.ok) {
                throw new Error('Failed to fetch dog image');
            }
            if (!factsResponse.ok) {
                throw new Error('Failed to fetch dog fact');
            }

            const imageData: { message: string } = await imageResponse.json();
            const factsData: { facts: string } = await factsResponse.json();
            // console.log(factsData);


            setDogUrl(imageData.message);
            setRandomDogFact(factsData.facts);

        } catch (error) {
        console.error(error);
    }
        
    }


        
    

    useEffect(() => {
        if (dogUrl) {
            console.log(dogUrl); 
        }
    }, [dogUrl]); 

    return (
        <>
            <Box sx={{ bgcolor: '#d6b492', height: '100vh', width: '100vw' }}>
                <DenseAppBar name='A Dog Fact' type="dog" animalColor="#ba9d80" />
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
                    <Button sx={{ color: 'white', fontSize: '35px', border: '3px solid white', marginBottom: 2 }} onClick={getDogImage}>
                        Get a dog fact
                    </Button>
                </Box >
                <Box sx={{bgcolor: '#e8caa9', height: '50vh', display: 'flex', justifyContent: 'center',
                border: '1px solid #826f5b',
                marginLeft: 4, marginRight: 4 
                }}>
                {dogUrl && <img src={dogUrl} alt="Dog" style={{ maxHeight: '50vh', maxWidth: '20vw'}} /> }
                <Box sx={{overflowY: 'auto',
                overflowX: 'hidden'}}>
                    <Typography sx={{color: 'white', fontSize: '26px', margin: 2}}>{randomDogFact}</Typography>
                </Box>
                
                </Box>
            </Box>
        </>
    );
}

export default DogPage;
