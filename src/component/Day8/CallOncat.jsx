import useFetch from "./Call";
import React from "react";
const Cat = ({ cat: { url } }) => {
    return (
        <div className="cat">
            <img src={url} alt="duong" />
        </div>
    )
}
const CallCat = () => {
    const URL = "https://api.thecatapi.com/v1/images/search?breed_id=abys";
    const data = useFetch(URL);
    return (
        <div className="callcat">
            {
                data.map((cat) =>
                    <Cat cat={cat} />)
            }
        </div>
    )
}
export default CallCat