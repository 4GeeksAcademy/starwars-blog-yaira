import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'; //for the link id

const VehicleDescription = () =>{

    const [vehicle,setVehicle] = useState({});
    const {uid} = useParams();

    useEffect(() => {
        async function fecthData(){
            const fetchin = await fetch('https://www.swapi.tech/api/vehicles/' + uid)
            const data = await fetchin.json();
            setVehicle({...data.result.properties, description: data.result.description})
            console.log(data,'vehicle data')
            console.log(fetchin,'vehicleAPI')
        }

        fecthData()

    },[])

    console.log(vehicle,'vehicle')

    return(
        <div className=' d-flex row'>
            <div className='col-6'>
                <img className='img-fluid' src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fayay.co.uk%2Fbackgrounds%2Faction_games%2Fstar_wars%2Fstar-wars-combate-vehicles.jpg&f=1&nofb=1&ipt=1362c69e1d8c6c02a7729e863caf3e3e5f44e060d139d3570d7c33a3ece36ed2&ipo=images'></img>
            </div>

            <div className='bg-light text-center col' >
                <h1>{vehicle.name}</h1>
                <h3 className='pt-4'>Model: {vehicle.model}</h3>
                <h3 className='pt-4'>Vehicle Class:{vehicle.vehicle_class}</h3>
                <h3 className='pt-4'>Manufacturer: {vehicle.manufacturer}</h3>
                <h3 className='pt-4'>Crew: {vehicle.crew}</h3>
                <h3 className='pt-4'>Speed: {vehicle.max_atmosphering_speed}</h3>
                <h3 className='pt-4'>Cargo Capacity: {vehicle.cargo_capacity}</h3>
                <h3 className='pt-4'>Description: {vehicle.description}</h3>

            </div>
        </div>
    )
}

export default VehicleDescription