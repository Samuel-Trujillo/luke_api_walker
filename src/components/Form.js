import React, {useEffect, useState} from 'react';
import {Router, navigate} from '@reach/router';

const Input = (props) =>{
    const [dataType, setDataType] = useState("people");
    const [dataId, setDataId] = useState(1);

    const defaultData = ["people", "planets"];

    const userInput =(e) =>{
        e.preventDefault();
        navigate(`/${dataType}/${dataId}`);
    }

    return(
        <div>
            <form onSubmit = {userInput} >
                <select value = {dataType} onChange= {e => setDataType(e.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label>ID: </label>
                <input type = "number" value= {dataId} onChange={e => setDataId(e.target.value)} />
                <input type="submit" value = "Hang on Nerds!" />
            </form>
        </div>
    )
}

export default Input
