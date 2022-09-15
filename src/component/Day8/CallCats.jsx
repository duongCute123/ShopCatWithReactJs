import useFetch from "./Call";
import CallCat from "./CallOncat";
import React from "react";
const Cats = ({ cats: { name, description, temperament } }) => {
    return (
        <div className="onecat">
            <CallCat />
            <h1>{name.toUpperCase()}</h1>
            <p>{description}</p>
            <p>{temperament}</p>
        </div>
    )
}
const CallAll = () => {
    const url = 'https://api.thecatapi.com/v1/breeds'
    const data = useFetch(url)
    return (
        <div className="allcar">
            {data.map((cats) =>
                <Cats cats={cats} />)}
        </div>
    )
}
export default CallAll