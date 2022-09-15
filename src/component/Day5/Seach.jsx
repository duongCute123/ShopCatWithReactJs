import { useState } from "react";
import AppCat from "./CallCat";
const Seach = () => {
    const [data, setData] = useState([]);
    const onchange = (e) => {
        e.preventDefault();
        setData(e.target.value);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=985e5e35118c1f563336a480e035a0e1&language=en-US&page=1&include_adult=false&data=${e.target.value}`)
        .then(res => { res.json() })
        .then(error => { console.log(error) })
    }
    return (
        <div className="hello">
            <input type="text" placeholder="Nhập phim cần tìm kiếm vào"
                onChange={onchange} value={data} />
        </div>
    )
}
export default Seach