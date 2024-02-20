import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => { 
        if(pathname !== localStorage.getItem("currentPath")) {
            localStorage.setItem("currentPath", pathname);
            window.scrollTo({top:0, left:0, behavior:"instant"});
        }
    }, [pathname]);

    return null;
}