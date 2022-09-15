import React from "react";
import { useState } from "react";

const Main = () => {
    const list = {
        firstname: "",
        lastname: "",
        title: ''
    }
    const [data, setData] = useState(list)
    const change = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value });
    }
    const submit = (e) => {
        e.preventDefault();
        console.log(data);
    }
    const { firstname, lastname, title } = data
    return (
        <div className="hi">
            <form action="">
                <label htmlFor="">Nhập tên của bạn</label>
                <input type="text" name="firstname" value={firstname} onChange={change} /> <br />
                <label htmlFor="">Nhập last Name của bạn</label>
                <input type="text" name="lastname" value={lastname} onChange={change} /> <br />
                <label htmlFor=""></label> <br />
                <input type="button" value="Submit" onClick={submit} />
            </form>
        </div>
    )
}
export default Main