import React, {Component} from 'react'

import Navbar from '../../_Common/Components/navbar';
import HalfTitle from '../../_Common/Components/halfTitle';
import Footer from '../../_Common/Components/footer';

import LeadershipGallery from './leadershipGallery';
import LeadershipIntro from './leadershipIntro';

/* Main export file to index that combines all "leadership" components */

export default class Leadership extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <HalfTitle header = 'Leadership' imgSrc = './Images/Leadership/Leadership_Title_35B&C.jpeg' brightness={75} position={55} caption='Read Bios' captionLink='/Bios'/>
                <LeadershipIntro />
                <LeadershipGallery />
                <Footer />
            </div>
        )
    }
}