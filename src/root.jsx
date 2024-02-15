import { Outlet } from "react-router-dom";
import ScrollToTop from "./Pages/_Common/Components/scrollToTop";

function RootRouteComponent() {
    return (
        <>
            <ScrollToTop/>
            <Outlet />
        </>
    );
}

export default RootRouteComponent;