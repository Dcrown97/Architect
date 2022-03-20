import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Home from "./Screens/Home";
import Map from "./Screens/Map";
import Project from "./Screens/Project";
import SingleProject from "./Screens/SingleProject";

function Archi() {
    return (
        <div className="w3-content w3-padding" style={{ maxWidth: "1564px" }}>

            <BrowserRouter>
                <Header />
                <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/map" element={<Map />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/project/:course_id" element={<SingleProject />} />
                    <Route path="/about" element={<About />} />


                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default Archi;
