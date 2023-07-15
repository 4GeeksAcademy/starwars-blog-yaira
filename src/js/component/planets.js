import React, {useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const Planets = () => {

    const [Planets, setPlanets] = useState([]);
    const {store, actions} = useContext(Context);
    const [liked, setLiked] = useState(false);


    useEffect(() => {
        async function fetchData(){
            const fetchin = await fetch('https://www.swapi.tech/api/planets');
            const data = await fetchin.json();
            setPlanets(data.results);

        }

        fetchData()

    },[])

        //favorite button function
        useEffect(() => {
            if (
                store.favorites.find((x) => {
                    for (let i in x) {
                        if (Planets[i] && Planets[i].name === x[i].name) {
                            return true;
                        }
                    }
                })
            ) {
                setLiked(true);
            } else {
                setLiked(false);
            }
        }, [store.favorites]);



    return(
        <>
        <h3 className="text-danger mt-4">Planets</h3>
        <div className="d-flex sideScroll row flex-nowrap overflow-auto ">

        {Planets.map((planet, index) => (
        <div className="card w-25">
        <img className="card-img-top img-fluid" src="https://www.nawpic.com/media/2020/star-wars-nawpic-23.jpg" alt="Card image cap"></img>
            <div className="card-body">
            <h5 className="card-title">{planet.name}</h5>
            <div className="d-flex justify-content-end mt-2">
            <a className="btn btn-danger me-1" onClick={() => {actions.addFavorite(planet.name)}}>
                <i class="fa fa-heart ms-1"></i></a>
            <Link to={/PlanetDescription/+ planet.uid} className="btn btn-primary">Learn More</Link>
            </div>
            </div>
        </div>
        ))}

        </div>
      </>
    );
}


export default Planets