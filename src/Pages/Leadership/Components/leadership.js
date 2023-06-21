import React, {Component} from 'react'

import Navbar from '../../_Common/Components/navbar';
import HalfTitle from '../../_Common/Components/halfTitle';
import Footer from '../../_Common/Components/footer';

/* Main export file to index that combines all "home" components */

export default class Leadership extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <HalfTitle header = 'Leadership' img = ''/>
                <Footer />
            </div>
        )
    }
}