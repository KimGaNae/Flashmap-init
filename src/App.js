import React from "react"
import {Link, Route, Routes} from "react-router-dom"

import Main from "./components/Main"
import HowToUse from "./components/HowToUse"
import Docs from "./components/Docs"
import About from "./components/About"

import imgmain from "./images/imgmain.svg"
import imguse from "./images/imginfo.svg"
import imgdocs from "./images/imgdocs.svg"
import imgabout from "./images/imgabout.svg"

import "./styles.css"

export default function App() {
    return (
        <> 
            <nav>
                <ul className="nav">
                    <li className="nav--main">
                        <Link to="/">
                            <img src={imgmain} width="20px"/>
                            Main
                        </Link>
                    </li>
                    <li className="nav--use">
                        <Link to="/use">
                            <img src={imguse} width="20px"/>
                            How To Use
                        </Link>
                    </li>
                    <li className="nav--docs">
                        <Link to="/docs">
                            <img src={imgdocs} width="20px"/>
                            Docs
                        </Link>
                    </li>
                    <li className="nav--about">
                        <Link to="/about">
                        <img src={imgabout} width="20px"/>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/use" element={<HowToUse />} />
                <Route path="/docs" element={<Docs />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    )
}