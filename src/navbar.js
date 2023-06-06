/********************************************************************************************************
** this Navbar class will be called on every page 
** Managing the tabs requires passing props to the defined Tab class
** there are two options, the so-called 'logo' tab and 'text' tab.
** pass --logo as name prop to render the logo tab, otherwise render a text tab with 'name'
*/

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import './navbar.css'

export default class Navbar extends Component {
    
    render() {

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark navbar">

            <div className="container-fluid">
                <Tab name={'--logo'} />
                <Tab name={'About'}/>
                <Tab name={'Events'}/>
                <Tab name={'Links'}/>
                <Tab name={'Leadership'}/>
                <Tab name={'Archives'}/>
            </div>

        </nav>
    )
    }
}

class Tab extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        //if props specified as 'logo', return the oyfa logo. otherwise if provided 'name', return a text tab
        const logoContent =
            <img src="https://repository-images.githubusercontent.com/201129773/d6396d00-b9ce-11e9-8c01-299677f98593" width="5%" alt="Oyfa Logo"/>

        const textContent = 
        <div>                
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item tab-content">{this.props.name}</li>
            </ul>
        </div>;

        //if the type prop is logo, return the logoContent, otherwise return textContent according to name prop
        return(
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {this.props.name == '--logo' ? logoContent : textContent} 
            </div>
        )
    }
}