import React from "react";
import { Component } from "react";
import CallAll from "./CallCats";
import Main from "./Form";
import "../Day8/Main.css"
import {
    BrowserRouter, Router,
    Route,
    Routes,
    Switch,
    NavLink,
} from 'react-router-dom'
const NavBar = () => (
    <div className="navbar">
        <ul>
            <li>
                <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/shopcat'}>ShopCat</NavLink>
            </li>
            <li>
                <NavLink to={'/contact'}>Contact</NavLink>
            </li>
            <li>
                <NavLink to={'/support'}>Support</NavLink>
            </li>
        </ul>
    </div>
)
const Menus = () => {
    return (

        <div className="menus">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/shopcat" element={<CallAll />} />
                    <Route path="/contact" element={<Main />} />
                    <Route path="/support" element={<CallAll />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Menus