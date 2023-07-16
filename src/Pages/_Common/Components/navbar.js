/* this Navbar class will be called on every page 
** Managing the tabs requires passing props to the defined Tab class */

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import '../Stylesheets/navbar.css'
import { NAVBAR_TABS } from '../../../Constants';

export default class Navbar extends Component {
    
    render() {
        /* for each item in this array, dynamically render a tab from the NAVBAR_TABS array into the nav component */

        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark navbar_background">
                    {NAVBAR_TABS.map((item, index) => (
                        <Tab name={item} key={index}/>
                    ))}
            </nav>
        )
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
**      Tab component, either a small OYFA logo image or a list-item which links to an internal routed link.
**==============================================================================================================*/
class Tab extends Component{
    render(){
        const name = this.props.name

        /* if props.name specified as '--logo', return the oyfa logo with link to Home page */
        const logoTab =
            <Link to='/' className='navbar_react_link'>
                <img src='./Images/_Common/Navbar_OYFA_Logo.png' className = 'navbar_logo' />
            </Link>

        /* if props.name specified as as a String, return a text tab with link to /{name} */
        const textTab = 
        <Link to={'/'+name} className='navbar_react_link'>                
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