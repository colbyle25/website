import React, {Component} from 'react'

import Navbar from '../../_Common/Components/navbar';
import HalfTitle from '../../_Common/Components/halfTitle'
import Footer from '../../_Common/Components/footer';

import LinkGallery from './linksLinkGallery';

/* Main export file to index that combines all "links" components */

export default class Links extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <HalfTitle header = 'Links' imgSrc = './Images/Links/Links_Title_Culturefest.jpeg'
                brightness={80} position={35} />
                <LinkGallery />
                <Footer />
            </div>
        )
    }
}