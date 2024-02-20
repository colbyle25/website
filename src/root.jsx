import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function RootRouteComponent() {
    return (
        <>
            <ScrollToTop/>
            <Navbar logoImgSrc="./Images/_Common/Navbar_OYFA_Logo.png"/>
            <Outlet />
            <Footer />
        </>
    );
}

export default RootRouteComponent;