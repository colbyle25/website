import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import Navbar from '../../_Common/Components/navbar';
import HalfTitle from '../../_Common/Components/halfTitle';
import Footer from '../../_Common/Components/footer';

/* Main export component to index that combines all "About" components */

export default class About extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <HalfTitle header = 'About' img = ''/>
                <Footer />
            </div>
        )
    }
}