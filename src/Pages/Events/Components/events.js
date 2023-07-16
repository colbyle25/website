import React, {Component} from 'react'

import Navbar from '../../_Common/Components/navbar';
import HalfTitle from '../../_Common/Components/halfTitle';
import Footer from '../../_Common/Components/footer';

/* Main export file to index that combines all "events" components */

export default class Events extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <HalfTitle header = 'Events' imgSrc = './Images/Events/Events_Title_Yogoyfa.jpeg' brightness = {80} caption='Check Instagram for latest updates' captionLink='https://www.instagram.com/oyfaatuva/' newTab = 'true'/>
                <Footer />
            </div>
        )
    }
}