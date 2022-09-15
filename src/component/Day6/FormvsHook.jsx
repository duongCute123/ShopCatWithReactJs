import { useState } from "react";
//Lấy giá trị đầu vào với 1 ô input
const FormHook = () => {
    const [firstName, setFirstName] = useState('');
    const change = (e) => {
        const value = e.target.value
        setFirstName(value);
    }
    return (
        <div className="hello">
            <h1>{firstName}</h1>
            <input type="text" name="firstName" id="firstNamr" value={firstName} onChange={change} />
        </div>
    )
}
//Lấy dữ liệu với nhiều giá trị đầu vào là các input type là text
const Hello = () => {
    const list = {
        firstName: '',
        lastName: '',
        title: '',
        country: ''
    }
    const [data, setData] = useState(list)
    const change = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const submit = (e) => {
        e.preventDefault()
        console.log(data)
    }
    const { firstName, lastName, title, country } = data
    return (
        <div className="hi">
            <form>
                <div>
                    <input type="text" name="firstName" value={firstName} onChange={change} id="" />
                </div>
                <div>
                    <input type="text" name="lastName" value={lastName} onChange={change} id="" />
                </div>
                <div>
                    <input type="text" name="country" value={country} onChange={change} id="" />
                </div>
                <div>
                    <input type="text" name="title" value={title} onChange={change} id="" />
                </div>
                <input type="button" value="Submit" onClick={submit} />
            </form>
            <h1>{firstName}{lastName}{title}{country}</h1>
        </div>
    )
}
//Lấy dữ liệu với nhiều loại đầu vào nhá các anh dương
//Hơi khó hiểu quá nhìn hoa cả mắt
export default Hello