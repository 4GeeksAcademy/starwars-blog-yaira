import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'; //for the link id

const CharacterDescription =() => {

    const [character, setCharacter] = useState({}); //curly for the object
    const {uid} = useParams();

    useEffect(() => {
        async function fetchData() {
            const result = await fetch('https://www.swapi.tech/api/people/'+ uid) // slash people to get all the list of people
            const data =  await result.json() //convert into json 
            setCharacter(data.results) //the now json url data to show its results, the data
        }

        fetchData() //run the fecthdata function
    },[])
    console.log(character,'Character');

    return(
        <div className='d-flex'>
            <img src='#'></img>
            <h1>{character.name}</h1>
            <h2>{character.homeworld}</h2>
            <div>characterDescrip</div>
        </div>

    )
}

export default CharacterDescription