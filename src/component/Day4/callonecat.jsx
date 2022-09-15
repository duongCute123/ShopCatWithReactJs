import useFetch from "./callApi"
const OneCat=({cats:{url,id}})=>{
    return(
        <div className="oncat">
            <img src={url} alt={id} />
        </div>
    )
}
const ReturCat=(props)=>{
    const URL='https://api.thecatapi.com/v1/images/search?breed_id=abys'
    const data=useFetch(URL)
    return(
        <div className="onecat">
            <h1>Hello các bạn</h1>
            <div className="calldata">
            {data.map((cats)=>(
                <OneCat  cats={cats}/>
            ))}
            </div>
        </div>
    )

}
export default ReturCat