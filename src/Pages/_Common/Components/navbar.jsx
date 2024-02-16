/* this Navbar class will be called on every page 
** Managing the tabs requires passing props to the defined Tab class */

import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar as BootstrapNavbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../Stylesheets/navbar.css'
import { NAVBAR_TABS } from '../../../Constants';

export default class Navbar extends Component {
    
    renderDesktopNavbar(){
         /* for each item in this array, dynamically render a tab from the NAVBAR_TABS array into the nav component */
        return (
            <nav className='navbar sticky-top navbar-expand-lg navbar-dark navbar_background'>
                {NAVBAR_TABS.map((item, index) => (
                    <DesktopTab name={item} key={index}/>
                ))}
            </nav>
        )
    }

    renderMobileNavbar(){
        /* for each item in this array, dynamically render a tab from the NAVBAR_TABS array into the nav component */
        return (
            <BootstrapNavbar sticky='top' data-bs-theme='light' collapseOnSelect expand='lg' className = 'bootstrap_navbar'>
                <BootstrapNavbar.Brand href='/'>
                    <div className = 'navbar_logo_container'>
                        <img src='./Images/_Common/Navbar_OYFA_Logo.png' className = 'navbar_logo'/>
                        <span className = 'navbar_text'>OYFA at UVA</span>
                    </div>
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls='responsive-navbar-nav' />
                <BootstrapNavbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='mr-auto navbar_text'>
                        {NAVBAR_TABS.map((item, index) => {
                            if (item !== '--logo') return <Nav.Link key={index} href={'/' + item}>{item}</Nav.Link>
                        })}
                    </Nav>
                </BootstrapNavbar.Collapse>
            </BootstrapNavbar>
        )    
    }

    render() {
        if(window.screen.width < 1000){
            return this.renderMobileNavbar()
        }
        else{
            return this.renderDesktopNavbar()
        }
    }
}

/*==USAGE GUIDE===================================================================================================
**  DESCRIPTION:
**      Renders a single tab to go in the Navbar. There are two options, the so-called "logo tab" and "text tab."
**      pass '--logo' as name prop to render the "logo tab", otherwise render a "text tab" with {name} as the text.
**  PROPS:
**      name: string: either '--logo' for the logo for Home on the left side of the navbar, or the name of a text
**            tab on the right side, linking to /{name}. You can make a separate link prop to go to a custom link
**            if you need it.
**  RETURNS:
**      DesktopTab component: a small OYFA logo w/ caption or a list-item which links to an internal routed link.
**==============================================================================================================*/
class DesktopTab extends Component{
    render(){
        const name = this.props.name

        /* if props.name specified as '--logo', return the oyfa logo with link to Home page */
        const logoTab =
            <Link to='/' className='navbar_react_link'>
                <div className = 'navbar_logo_container'>
                    <img src='./Images/_Common/Navbar_OYFA_Logo.png' className = 'navbar_logo' />
                    <span className = 'navbar_logo_caption'>OYFA at UVA</span>
                </div>
            </Link>

        /* if props.name specified as as a String, return a text tab with link to /{name} */
        const textTab = 
        <Link to={'/'+name.toLowerCase()} className='navbar_react_link'>                
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item navbar_tab_content">{name}</li>
            </ul>
        </Link>;

        /* conditional logic to return logo or text tab */
        return(
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {name == '--logo' ? logoTab : textTab} 
            </div>
        )
    }
}