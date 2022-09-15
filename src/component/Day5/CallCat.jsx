import useFetch from "../Day4/callApi.jsx"
import ReturCat from "../Day4/callonecat.jsx"
const Cat=({cat})=>{
    return(
        <div className="cat">
            <ReturCat/>
            <h1>{cat.name}</h1>
            <p>Thông tin của thuộc tính {cat.description}</p>
            <p>{cat.temperament}</p>
        </div>
    )
}
const AppCat=()=>{
    const url="https://api.thecatapi.com/v1/breeds"
    const data=useFetch(url)
    const hello=()=>{
        console.log(data);
    }
    setTimeout(hello,2000)
    
    return(
        <div className="hi">
            <h1>Helo tất cả các bạn nhá</h1>
            <p>Số con mèo lấy đc là{data.length}</p>
            <div className="lay">
                    {data.map((list)=>(
                        <Cat key={list} cat={list}/>
                    ))}
            </div>
        </div>
    )
}
export default AppCat