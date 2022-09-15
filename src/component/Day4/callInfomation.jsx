import useFetch from "./callApi";
import ReturCat from "./callonecat";
const Cat = ({ cat: { name, description, temperament } }) => {
    return (
        <div className="hello">
            <h1>Mèo Víp Pro</h1>
            <ReturCat />
            <h1>{name.toUpperCase()}</h1>
            <p>{description}</p>
            <p>{temperament}</p>
            <button type="button" className="btn">Mua Hàng</button>
        </div>

    )
}
const ListCat = (props) => {
    const url = "https://api.thecatapi.com/v1/breeds";
    const data = useFetch(url)
    return (
        <div className="app">
            <p>Chào các bạn đến với customer Hook</p>
            <p>Mong là gọi đc API</p>
            <div className='fetch'>
                <p>Số con mèo lấy đc là{data.length}</p>
                {data.map((cat) => (
                    <Cat cat={cat} />
                ))}
            </div>
        </div>
    )
}
export default ListCat