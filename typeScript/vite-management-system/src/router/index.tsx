import { lazy, Suspense } from "react";
// import Home from "@/views/Home";
// import About from "@/views/About";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import("../views/Home"))
const User = lazy(() => import("../views/User"))
const About = lazy(() => import("../views/About"))

const withLoadingComponent = (comp: JSX.Element) => (
    <Suspense fallback={<div>Loading...</div>}>
        {comp}
    </Suspense>
)



const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path="/home" element={
                withLoadingComponent(<Home />)
            } />
            <Route path="/about" element={withLoadingComponent(<About />)} />
            <Route path="/user" element={withLoadingComponent(<User />)} />
        </Routes>
    </BrowserRouter>
);

export default baseRouter;
