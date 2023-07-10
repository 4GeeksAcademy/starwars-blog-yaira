import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'; //for the link id

const CharacterDescription =() => {

    const [character, setCharacter] = useState({}); //curly for the object
    const {uid} = useParams();

    useEffect(() => {
        async function fetchData() {
            const result = await fetch('https://www.swapi.tech/api/people/'+ uid) // slash people to get all the list of people
            const data =  await result.json() //convert into json, results comes from the swapi link its the name of an object
            setCharacter({...data.result.properties, description: data.result.description}) //the now json url data to show its results, the data
                        //...data.result.property is the list that inside result{property objects} and making creating the description is to get the
                        //stuff thats inside of result but not property
            console.log(data);
            console.log(result);     
  }

        fetchData() //run the fecthdata function
    },[])

    console.log(character,'Character');


    return(
        <div className='d-flex row'>
            <div className='col-4'>
                <img className='img-fluid' src='https://www.nawpic.com/media/2020/star-wars-nawpic-23.jpg'></img>
            </div>

            <div className='bg-light text-center col'>
            <h1>{character.name}</h1>
            <h3 className='pt-4 '>Gender: {character.gender}</h3>
            <h3 className='pt-4 '>Birth Year: {character.birth_year}</h3>
            <h3 className='pt-4 '>Eye Color: {character.eye_color}</h3>
            <h3 className='pt-4 '>Skin: {character.skin_color}</h3>
            <h3 className='pt-4 '>Hair: {character.hair_color}</h3>
            <h3 className='pt-4 '>Height: {character.height}</h3>
            <h3 className='pt-4 '>Mass: {character.mass}</h3>
            <h3 className='pt-4 '><a href='{character.homeworld}'>Homeworld</a> </h3>
            <h3 className='pt-4 '>{character.description}</h3>
            </div>
        </div>

    )
}

export default CharacterDescription