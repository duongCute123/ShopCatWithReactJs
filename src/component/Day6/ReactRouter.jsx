import React from "react";
import { Component } from "react";
import AppCat from "../Day5/CallCat";
import RunApp from "../Day4/OnMap";
import Header from "../Day2/LearnState";
import { BrowserRouter, Routes, Route, NavLink, Switch } from "react-router-dom";
const NavBar = () => (
    <ul>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li>
            <NavLink to='/support'>Support</NavLink>
        </li>
    </ul>
)
class Load extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <NavBar />

                <Routes>
                    <Route exact path="/" element={<AppCat />} />
                    <Route path="/contact" element={<Header />} />
                    <Route path="/support" element={<RunApp />} />
                </Routes>

            </BrowserRouter>
        )
    }
}
export default Load