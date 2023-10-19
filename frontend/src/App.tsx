import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Estimate from "./pages/estimate/Estimate";
import Work from "./pages/work/Work";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const App = () => {
    return (
        <section className="flex flex-col justify-between w-full">
            <Header />
            <Banner text="Charlotte, NC's Premiere Christmas, Landscape, and Hardscape Lighting Designer" />
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route index path="/estimate" element={<Estimate />} />
                <Route index path="/work" element={<Work />} />
            </Routes>
            <Footer />
        </section>
    );
};

export default App;
