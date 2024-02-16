import { Outlet } from "react-router-dom";
import ScrollToTop from "./Pages/_Common/Components/scrollToTop";
import Navbar from "./Pages/_Common/Components/navbar";
import Footer from "./Pages/_Common/Components/footer";

function RootRouteComponent() {
    return (
        <>
            <ScrollToTop/>
            <Navbar/>
            <Outlet />
            <Footer />
        </>
    );
}

export default RootRouteComponent;