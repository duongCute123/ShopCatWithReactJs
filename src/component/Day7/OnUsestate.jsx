import React from "react";
import { Component } from "react";
import { useState, useEffect } from "react";
//Tạo form login check dữ liệu nhập vào
const Login = () => {
    const list = {
        firstname: '',
        lastname: ''
    }
    const user = [
        {
            username: "NV123",
            pass: "thudiep"
        },
        {
            username: "NV1234",
            pass: "thudiep1"
        },
        {
            username: "NV1235",
            pass: "thudiep2"
        },
        {
            username: "NV1236",
            pass: "thudiep3"
        }
    ]
    //Lây danh sách người dùng
    const Users=({users:{username,pass}})=>{
        return(
            <div className="use">
                <p>{username}</p>
                <p>{pass}</p>
            </div>
        )
    }
    const User=({user})=>{
        const lis=user.map((users)=><Users users={users}/>)
        return lis
    }
    const [form, setData] = useState(list)
    const [tk,setLog]=useState('')
    const change = (e) => {
        const { name, value } = e.target
        setData({ ...form, [name]: value })
    }
    const submit = ({user:{username,pass}}) => {
        const login=form===username&& form===pass?"Đăng nhập thành công":"Đăng nhập thất bại"
        setLog(login)
    }
    const { firstname, lastname } = form
    return (
        <div className="login">
            <h1>Login</h1>
            
            <label htmlFor="">Nhập tên đăng nhập của bạn vào</label> <br />
            <input type="text" name="firstname" value={firstname} onChange={change} id="" placeholder="Vui lòng nhập tên đăng nhập vào" /> <br />
            <label htmlFor="">Nhập mật khẩu vào nhá</label> <br />
            <input type="password" name="lastname" value={lastname} onChange={change} placeholder="Vui lòng nhập mật khẩu vào" /> <br />
            <label htmlFor=""></label> <br />
            <input type="button" value="Login" onClick={submit} />
        </div>
    )
}
export default Login
//Truyền giá trị kiểu boolean
const Check = () => {
    const [data, setData] = useState("Hello dương nhá")
    const change = () => {
        const hi = data ? 'Hello anh dương nhá' : "Lỗi tại anh chưa đủ tốt nhá"
        setData(hi)
    }
    return (
        <div className="check">
            <h1>{data}</h1> <br />
            <input type="button" value="submit" onClick={change} />
        </div>
    )
}

//Lấy giá trị của form  với 1 giá trị
const CallForm = () => {
    const [data, setData] = useState('')
    const change = (e) => {
        const value = e.target.value
        setData(value)
    }
    const submit = (e) => {
        e.preventDefault()
        console.log(data);
    }
    const { firstname } = data
    return (
        <div className="hic">
            <label htmlFor="name">Nhập tên của bạn vào nhé</label> <br />
            <input type="text" name="firstname" value={firstname} id="" onChange={change} /> <br />
            <label htmlFor=""></label> <br />
            <input type="button" value="Submit" onClick={submit} />
        </div>
    )
}
//sự kiện lấy giá trị của state
const OnTap = () => {
    const [data, setData] = useState(0)
    const change = () => {
        setData(data + 1)
    }
    return (
        <div className="hi">
            <h1>{data}</h1>
            <input type="button" value="submit" onClick={change} />
        </div>
    )
}
