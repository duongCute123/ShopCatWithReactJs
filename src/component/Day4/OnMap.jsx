import React from "react"
import { Component } from "react"
import ReturCat from "./callonecat"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import '../../module.css/index.css'
import ListCat from "./callInfomation"
import Seach from "../Day5/Seach"
import duong from "../../imges/197818459_1171337156612245_8143315140119428312_n.jpg"
const Hello = ["Xuân", "Hạ", "Thu", "Dông"]

const Main = ({ Hello }) => {
    const list = Hello.map((lists) => <li key={lists}>{lists}</li>)
    return list
}
const Header = () => {
    return (
        <div className="hello">
            <div className="hello1">
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    <li>
                        <a href="">Support</a>
                    </li>
                    <li>
                        <a href="">New</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
const Mains = (props) => {
    return (
        <div className="Main">
            <div className="main1">
                <h1>Chào mừng bạn đến với khóa học {props.data.tilte}</h1>
                <img src={duong} alt="duonhe" />
                <p>Tên của tôi là {props.data.firstname} {props.data.fullname}</p>
                <p>Tôi đang cố gắng hoàn thành khóa học với {props.data.tilte}</p>
            </div>
            <div className="main2">
                <h1>Những skill hiện tại tôi đang sài là {props.data.skill}</h1>
                <p>Những thông tin cơ bản về {props.data.firstname} {props.data.fullname}</p>
                <p>Mô tả về bản thân {props.data.firstname} {props.data.fullname}</p>
                <div className="infomation">
                    <h1>Những trang có thể liên lạc với tôi là:</h1>
                    <div className="thongtincanhan">
                        <a href="">Facebool</a> <br />
                        <a href="">Twter</a> <br />
                        <a href="">Zala</a> <br />
                        <a href="">Liên hệ tôi với fax:0338629576</a> <br />
                        <a href="">Trang liên kết đến cửa hàng của tôi</a>
                    </div>
                </div>
                <div className="hoso">
                    <h1>Thông tin của bản thân tôi {props.data.firstname} {props.data.fullname}</h1>
                    <li>Họ tên:{props.data.firstname} {props.data.fullname}</li>
                    <li>Tôi hiện tại đang là sinh viên trường IUH univercity</li>
                    <li>Tôi đang cố gắng hoàn thiện quá trình trở thành một lâp trình viên Font-End</li>
                    <li>Hiện nay tôi có rất nhiều thắt mắt trong quá trình học tập:
                        Tất cả những gì tôi biết là tất cả tài liệu tôi tự tìm hiểu và hoàn thiện trong quá trình lập trình web
                        Những cái cần để trở thành lập trình fullstack
                    </li>
                </div>
            </div>
            <div className="main3">
                <h1>Những tin tức nổi bật trong ngày mà tôi có</h1>
                <a href="">Hôm nay </a>
            </div>
        </div>
    )
}
class Hi extends React.Component {
    render() {
        return (
            <div className="hi">

            </div>
        )
    }
}
const Footer=()=>{
    return(
        <div className="footer">
            <div className="fo1">
                <p>Người hướng dẫn là:Nguyễn Văn Dương</p>
                <p>Trang này được code lúc đang rảnh</p>
                <p>Cố gắng để học một ngôn ngữ lập trình nếu bạn đam mê với nó</p>
                <p>Địa chỉ để lirn hệ với tôi:Hoằng Trường Hoàng Hóa Thanh Hóa nhé</p>
            </div>
            <div className="fo1">
                <p>Liên hệ quảng cáo:0338629576</p>
                <p>Support:Lê Văn Năm</p>
                <p></p>
            </div>
        </div>
    )
}
const RunApp=()=>{
    const data={
        tilte:"React JS",
        firstname:"Nguyễn Văn",
        fullname:"Dương",
        skill:"HTML,CSS,JS,Bootstrap,Jquery"
    }
    return(
        <div className="runapp">
            <Seach/>
            <Header/>
            <Mains data={data}/>
            <Footer/>
            <ListCat/>
            
        </div>
    )
}
export default RunApp