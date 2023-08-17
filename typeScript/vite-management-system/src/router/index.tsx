import { lazy, Suspense } from "react";
// import Home from "@/views/Home";
// import About from "@/views/About";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import("../views/Home"))
const User = lazy(() => import("../views/User"))
const About = lazy(() => import("../views/About"))
const Page1 = lazy(() => import("../views/Page1"))
const Page2 = lazy(() => import("../views/Page2"))

const withLoadingComponent = (comp: JSX.Element) => (
    <Suspense fallback={<div>Loading...</div>}>
        {comp}
    </Suspense>
)



const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to={"/home/page1"} />} />
            <Route path="/home" element={withLoadingComponent(<Home />)}>
                <Route path="page1" element={withLoadingComponent(<Page1 />)} />
                <Route path="page2" element={withLoadingComponent(<Page2 />)} />
            </Route>
            <Route path="/about" element={withLoadingComponent(<About />)} />
            <Route path="/user" element={withLoadingComponent(<User />)} />
        </Routes>
    </BrowserRouter>
);

export default baseRouter;
