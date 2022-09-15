const Listmap = ({ listmap }) => {
    const list = listmap.map((lists) => <li key={lists}>{lists}</li>)
    return list
}
const countries = [
    { name: 'Finland', city: 'Helsinki' },
    { name: 'Sweden', city: 'Stockholm' },
    { name: 'Denmark', city: 'Copenhagen' },
    { name: 'Norway', city: 'Oslo' },
    { name: 'Iceland', city: 'Reykjavík' },
]
const Country=({country:{name,city}})=>{
    return(
        <div className="country">
            <h1>Tên quốc gia là {name}</h1>
            <p>Tên của thành phố là:{city}</p>
        </div>
    )
}
const Countrys=({countries})=>{
    const list=countries.map((list)=><Country country={list}/>)
    return list
}
const Main = () => {
    const listmap = ["Nguyễn Văn Dương", "HTML", "CSS", "React Js"]
    console.log(countries)
    return (
        <div className="hello">
            <Listmap listmap={listmap} />
            <Countrys countries={countries}/>
        </div>
    )
}
export default Main