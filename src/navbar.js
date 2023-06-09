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
import './navbar.css'

export default class Navbar extends Component {
    
    render() {
        /* for each item in this array, dynamically render a tab */
        const content = ['--logo', 'About', 'Event', 'Links', 'Leadership', 'Archives']

        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark navbar">
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
        /* if props.name specified as '--logo', return the oyfa logo. otherwise return a text tab */
        const logoTab =
            <img src="https://repository-images.githubusercontent.com/201129773/d6396d00-b9ce-11e9-8c01-299677f98593" className = 'logo'/>

        const textTab = 
        <div>                
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item tab-content">{this.props.name}</li>
            </ul>
        </div>;

        return(
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {this.props.name == '--logo' ? logoTab : textTab} 
            </div>
        )
    }
}