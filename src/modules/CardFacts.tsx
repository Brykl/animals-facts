
import { useState, useEffect } from 'react';
import TemplateCard from './cards';


interface CatFact {
    fact: object;
    _id: string;
    text: string;
    status: {
        verified: boolean;
      };
    source: string;
    updatedAt: string;
    createdAt: string;
    type: string;
}

function GetCatFacts () {




    const [ catFacts, setCatFacts ] = useState < CatFact[] | null > (null);
    const [ loadingError, setLoadingError ] = useState < string | null > (null);
    const [ loading, setLoading] = useState < boolean > (true)

    useEffect( () => {
        const fetchCatFacts = async () => {
            try {
                const response = await fetch('https://cat-fact.herokuapp.com/facts/')
                if(!response.ok) {
                    throw new Error('Failed to fetch cat facts');
                } 
                    const data: CatFact[] = await response.json();
                setCatFacts(data);
                console.log(catFacts);
                
            } catch (err) {
                setLoadingError( (err as Error).message);
            } finally {
                setLoading(false);
            }
        };
        fetchCatFacts();
    }, []);


    return (
        <>
        <div>
      {loading && <p>Loading...</p>}
      {loadingError && <p style={{ color: 'red' }}>Error: {loadingError}</p>}
      {catFacts && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {catFacts.map((fact) => {
            console.log(fact);  
            return <TemplateCard key={fact._id} text={fact.text} _id={fact._id}
             verified={fact.status.verified} source={fact.source} updatedAt={fact.updatedAt} createdAt={fact.createdAt} fact={fact} />;
          })}
        </div>
      )}
    </div>
        </>
    )
}

export default GetCatFacts;
