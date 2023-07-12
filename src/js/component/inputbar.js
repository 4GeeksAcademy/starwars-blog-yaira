import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';


const InputBar = () => {
    const [text, setText] = useState('');
    const [data, setData] = useState([]);
    console.log(text);

    useEffect(() => { 
    async function fetchpeople () {  //this is fetching the data for the input people, planets, and vehicles
        let info = [];
        const result = await fetch('https://www.swapi.tech/api/people');
        const data = await result.json();
        data.results.forEach(element => {
            info.push(element)      //pushing the data into the info array
        });

        const result2 = await fetch('https://www.swapi.tech/api/planets');
        const data2 = await result2.json();
        data2.results.forEach(element => {
            info.push(element)
        });

        const result3 = await fetch('https://www.swapi.tech/api/vehicles');
        const data3 = await result3.json();
        data3.results.forEach(element => {
            info.push(element)
        });
        setData(info)
        console.log(info, 'info')

    }
    
        fetchpeople()

    }, [])

   console.log('data', data) 

   let filtered = data.filter(item => {
        return item.name.includes(text)
   })

    return(
    <div className='parentOfInput justify-content-end'>
    <form autoComplete='off'>
        <i class="fas fa-search me-2"></i>
        <input placeholder='search' type='text' value={text} onChange={(e) => setText(e.target.value) }></input>
    </form>
    <div className='dropdown'>
        {text.length ? filtered.map((item, index) => {
            return(
                <>

                <p >{item.name}</p>
                
                </>
            )
        }) : ''}
        
    </div>
    </div>
    )
}
export default InputBar
// reduce function can be used instead of mapping and filter