import React from "react";
import App from "@/App";
import Home from "@/views/Home";
import About from "@/views/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
);

export default baseRouter;
