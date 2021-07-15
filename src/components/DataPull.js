import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const DataPull = ({pull, id}) => {
    const [pullData, setPullData] = useState({});

    useEffect(() =>{
        axios.get("https://swapi.dev/api/" + pull + "/"+ id)
            .then(res => {
                setPullData(res.data);

        })
        .catch(err =>{
            navigate("/404")
        })

    }, [pull, id])

    if (pullData.hair_color){
        return (
            <div>
                <p>Name: {pullData.name}</p>
                <p>Height: {pullData.height}</p>
                <p>Hair color: {pullData.hair_color}</p>
                <p>Gender: {pullData.gender}</p>
            </div>
        )
    } else{
        return (
            <div>
                <p>Name: {pullData.name}</p>
                <p>Climate: {pullData.climate}</p>
                <p>Terrain: {pullData.terrain}</p>
                <p>Population: {pullData.population}</p>
            </div>
        )
    }
}

export default DataPull;