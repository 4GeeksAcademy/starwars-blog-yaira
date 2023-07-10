import { any } from "prop-types";
import React, {useState, useEffect, useContext}  from "react";
import { AsyncDependenciesBlock } from "webpack";

const Characters = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        async function fetchData() {
            const result = await fetch('https://www.swapi.tech/api/people')
            const data =  await result.json()
            setCharacters(data.results)
        }

        fetchData()
    },[])
    

    return( 
        <>
            <h3 className="text-danger">Characters</h3>
            {characters.length ? characters.map((character, index) => (
               
            <div className="card w-25" key = {index}> 
            <img className="card-img-top" src="..." alt="Card image cap"></img>
                <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <a href="#" className="btn btn-danger me-1"><i class="fa fa-heart ms-1"></i></a>
                <a href="#" className="btn btn-primary">Learn More</a>
                </div>
            </div> 
            )) : null }

        </>
    );
}


export default Characters
