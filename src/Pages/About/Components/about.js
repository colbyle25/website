import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import Navbar from '../../_Common/Components/navbar';
import HalfTitle from '../../_Common/Components/halfTitle';
import Footer from '../../_Common/Components/footer';

import History from './aboutHistory';
import Mission from './aboutMission';

/* Main export component to index that combines all "About" components */

export default class About extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <HalfTitle header = 'About' imgSrc = './Images/About/About_Title_Battle.jpeg'
                brightness={80} />
                <History />
                <Mission />
                <Footer />
            </div>
        )
    }
}