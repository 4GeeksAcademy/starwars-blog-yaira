import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const PlanetDescription = () => {

    const [planet, setPlanet] = useState({});
    const {uid} = useParams();

    useEffect(() => {
        async function fecthdata() {
            const fetchin = await fetch('https://www.swapi.tech/api/planets/' + uid);
            const data = await fetchin.json();
            setPlanet({...data.result.properties, description: data.result.description})
        }

        fecthdata()

    })

    return(
        <div className="d-flex row">
            <div className="col-6">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-cdn.9gag.com%2Fphoto%2Fam2OwL4_700b.jpg&f=1&nofb=1&ipt=f7d1d7a6159033b81e597c59210b0bfc22a64d90a418a07b6698fdb295a59e59&ipo=images"></img>
            </div>

            <div className="text-center col-6">
                <h1>{planet.name}</h1>
                <h3 className="pt-4">Diameter: {planet.diameter}</h3>
                <h3 className="pt-4">Population: {planet.population}</h3>
                <h3 className="pt-4">Gravity: {planet.gravity}</h3>
                <h3 className="pt-4">Climate: {planet.climate}</h3>
                <h3 className="pt-4">Terrain: {planet.terrain}</h3>
                <h3 className="pt-4">Description: {planet.description}</h3>

            </div>
        </div>
    )
}

export default PlanetDescription