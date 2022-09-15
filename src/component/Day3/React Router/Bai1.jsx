import { Component } from "react";
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
const Home=()=>{
    return <h1>Hello các bạn</h1>
}
const Contact=()=>{
    return <h1>Đây là trang liên hệ của chúng tôi</h1>
}
const Support=()=>{
    return <h1>Hướng dẫn sử dụng nhá</h1>
}
class Taplam extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/support" element={<Support/>}/>
                    <Route path="/" element={<Home/>}/>
                    
                </Routes>
            </BrowserRouter>
        )
    }
}
export default Taplam