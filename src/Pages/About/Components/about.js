import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import Navbar from '../../_Common/Components/navbar';
import Footer from '../../_Common/Components/footer';

/* Main export component to index that combines all "About" components */

export default class About extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <h1>Hello</h1>
                <Footer />
            </div>
        )
    }
}