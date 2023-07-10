import React, {useState, useEffect, useContext}  from "react";
import { Link } from "react-router-dom"; //import the link tag
import CharacterDescription from "../views/characterDescrip";

const Characters = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        async function fetchData() {
            const result = await fetch('https://www.swapi.tech/api/people') // slash people to get all the list of people
            const data =  await result.json() //convert into json 
            setCharacters(data.results) //the now json url data to show its results, the data
        }

        fetchData() //run the fecthdata function
    },[])
    

    return( 
        <>
        <h3 className="text-danger">Characters</h3>
        <div className="d-flex sideScroll row flex-nowrap overflow-auto ">

            {/* map  every character into this html format */}
            {characters.map((character, index) => (
               
            <div className="card w-25 d-flex me-2" key = {index}> 
            <img className="card-img-top" src="..." alt="Card image cap"></img>
                <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <a href="#" className="btn btn-danger me-1"><i class="fa fa-heart ms-1"></i></a>
                <Link to={'/CharacterDescription/' + character.uid} className="btn btn-primary">Learn More</Link>
                </div>
            </div> 
            ))  }
        </div>
        </>
    );
}


export default Characters
