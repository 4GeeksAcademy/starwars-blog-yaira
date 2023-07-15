import React, {useState, useEffect, useContext}  from "react";
import { Link } from "react-router-dom"; //import the link tag
import { Context } from "../store/appContext";

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const {store, actions} = useContext(Context)
    const [liked, setliked] = useState(false) //by defualt nothing is liked

    useEffect(() => {
        async function fetchData() {
            const result = await fetch('https://www.swapi.tech/api/people') // slash people to get all the list of people
            const data =  await result.json() //convert into json 
            setCharacters(data.results) //the now json url data to show its results, the data
            actions.setItem(data.result) //the favorites 
        }

        fetchData() //run the fecthdata function
    },[])

    //favorite button function
    useEffect(() => {
        if (
            store.favorites.find((x) => {
                for (let i in x) {
                    if (characters[i] && characters[i].name === x[i].name) {
                        return true;
                    }
                }
            })
        ) {
            setliked(true);
        } else {
            setliked(false);
        }
    }, [store.favorites]);
    

    return( 
        <>
        <h3 className="text-danger">Characters</h3>
        <div className="d-flex sideScroll row flex-nowrap overflow-auto ">

            {/* map  every character into this html format */}
            {characters.map((character, index) => (
               
            <div className="card w-25 d-flex me-2" key = {index}> 
            <img className="card-img-top" src="https://www.nawpic.com/media/2020/star-wars-nawpic-23.jpg" alt="Card image cap"></img>
                <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <div className="d-flex justify-content-end mt-2">
                    <a className="btn btn-danger me-1" onClick={() => {actions.addFavorite(character.name)}}>
                        <i class="fa fa-heart ms-1"></i>
                    </a>
                    <Link to={'/CharacterDescription/' + character.uid} className="btn btn-primary">Learn More</Link>
                </div>
                </div>
            </div> 
            ))  }
        </div>
        </>
    );
}


export default Characters
