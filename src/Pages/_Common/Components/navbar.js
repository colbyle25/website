/********************************************************************************************************
** this Navbar class will be called on every page 
** Managing the tabs requires passing props to the defined Tab class
** there are two options, the so-called 'logo' tab and 'text' tab.
** pass --logo as name prop to render the logo tab, otherwise render a text tab with 'name'
** you will simply need to change the contents of the "content" array below as the tabs are
** dynamically rendered for you
*/

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import '../Stylesheets/navbar.css'

export default class Navbar extends Component {
    
    render() {
        /* for each item in this array, dynamically render a tab */
        const content = ['--logo', 'About', 'Events', 'Links', 'Leadership', 'Archives']

        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark navbar_background">
                    {content.map((item, index) => (
                        <Tab name={item} key={index}/>
                    ))}
            </nav>
        )
    }
}

class Tab extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        /* if props.name specified as '--logo', return the oyfa logo with link to Home page */
        const logoTab =
            <Link to='/' className='navbar_react_link'>
                <img src='./Images/_Common/Navbar_OYFA_Logo.png' className = 'navbar_logo' />
            </Link>

        /* if props.name specified as as a String, return a text tab with link to /{name} */
        const textTab = 
        <Link to={'/'+this.props.name} className='navbar_react_link'>                
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item navbar_tab_content">{this.props.name}</li>
            </ul>
        </Link>;

        /* conditional logic to return logo or text tab */
        return(
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {this.props.name == '--logo' ? logoTab : textTab} 
            </div>
        )
    }
}