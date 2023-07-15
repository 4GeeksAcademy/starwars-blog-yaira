import React, {useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"; //import the link tag
import { Context } from "../store/appContext";


const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);
    const {store, actions} = useContext(Context);
    const [liked, setliked] = useState(false)

    useEffect(() => {
        async function getVehicles() {
            const fetchin = await fetch('https://www.swapi.tech/api/vehicles')
            const data = await fetchin.json();
            setVehicles(data.results)

        }

        getVehicles()

    },[])

        //favorite button function
        useEffect(() => {
            if (
                store.favorites.find((x) => {
                    for (let i in x) {
                        if (vehicles[i] && vehicles[i].name === x[i].name) {
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
        <h3 className="text-danger mt-4">Vehicles</h3>
        <div className="d-flex sideScroll row flex-nowrap overflow-auto ">

        {vehicles.map((vehicle, index) => 
        <div className="card w-25">
        <img className="card-img-top" src="https://www.nawpic.com/media/2020/star-wars-nawpic-23.jpg" alt="Card image cap"></img>
            <div className="card-body">
            <h5 className="card-title">{vehicle.name}</h5>
            <div className="d-flex justify-content-end mt-2">
            <a className="btn btn-danger me-1" onClick={() => {actions.addFavorite(vehicle.name)}}>
                <i class="fa fa-heart ms-1"></i>
            </a>
            <Link to={'/VehicleDescription/' + vehicle.uid} className="btn btn-primary">Learn More</Link>            
            </div>
            </div>
        </div> 
        )}
        </div>
      </>
    );
}


export default Vehicles