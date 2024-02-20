import { Outlet } from "react-router-dom";
import ScrollToTop from "./Pages/_Common/Components/scrollToTop";
import Navbar from "./Pages/_Common/Components/Navbar";
import Footer from "./Pages/_Common/Components/footer";

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