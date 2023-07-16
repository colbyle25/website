import React, {Component} from 'react'

import Navbar from '../../_Common/Components/navbar';
import TitleScreen from './homeTitle';
import Introduction from './homeIntro';
import Testimonies from './homeTestimonies';
import Footer from '../../_Common/Components/footer';

/* Main export file to index that combines all "home" components */

export default class Home extends Component{
    render(){
        return(
            <div>
                <title>Home</title>
                <Navbar />
                <TitleScreen />
                <Introduction />
                <Testimonies />
                <Footer />
            </div>
        )
    }
}