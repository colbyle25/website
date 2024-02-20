import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from "react-responsive";
import "../Stylesheets/navbar.css";
import useScrollPosition from "../../../useScrollPosition";

/**
 * USAGE GUIDE: to be made... I am lazy
 */

const SCROLL_POSITION_FOR_TRANSITION = 450; //Scroll Position = 0 is the top of the page (is this measured in pixels??) 
const MAX_WIDTH = "1000px" //Maximum window width to classify screen as "Mobile"

//Current navbar tabs
//TODO: abstract all these preset values away as props to make navbar more flexible 
const navbar = {
    about: { name: "ABOUT", url: "/about"},
    events: { name: "EVENTS", url: "/events"},
    links: { name: "LINKS", url: "/links"},
    leadership: { name: "LEADERSHIP", url: "/leadership"},
    archives: { name: "ARCHIVES", url: "/archives"},
};

export default function Navbar({ logoImgSrc }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: MAX_WIDTH });
    const scrollPosition = useScrollPosition()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMobileMenu = () => {
        if (isMobile) {
            setIsMenuOpen(false);
        }
    };

    return (
        <header className="header">
            <nav className={`nav ${scrollPosition > SCROLL_POSITION_FOR_TRANSITION ? "nav_bg_color" : ""}`}>
                <NavLink to="/" className="nav_logo">
                    <img src={logoImgSrc}/>
                </NavLink>
                {isMobile && (
                    <div className="nav_toggle" id="nav-toggle" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                )}
                { isMobile ? (
                    <div className={`nav_menu ${isMenuOpen ? "show-menu" : ""}`} id="nav-menu">
                        <NavBarLinks navBarLinksDict={navbar} isMobile={isMobile} closeMobileMenu={closeMobileMenu}/>
                        <div className="nav_close" id="nav-close" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                    </div>

                ) : (
                    <NavBarLinks navBarLinksDict={navbar} isMobile={isMobile} closeMobileMenu={closeMobileMenu}/>
                )}
            </nav>
    </header>
    );
}

function NavBarLinks({ navBarLinksDict, closeMobileMenu }) {
    return (
        <ul className="nav_list">
            {Object.keys(navBarLinksDict).map((componentKey) => (
                <NavBarLink key={componentKey} {...navBarLinksDict[componentKey]} closeMobileMenu={closeMobileMenu} />
            ))}
        </ul>
    );
}

function NavBarLink( { name, url, closeMobileMenu } ) {
    return (
        <li className="nav__item">
            <NavLink to={url.toLowerCase()} className="nav_link"  onClick={closeMobileMenu}>
                {name.toUpperCase()}
            </NavLink>
        </li>
    )
}