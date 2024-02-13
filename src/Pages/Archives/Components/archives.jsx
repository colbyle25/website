import {Component} from 'react'

import Navbar from '../../_Common/Components/navbar';
import HalfTitle from '../../_Common/Components/halfTitle';
import Footer from '../../_Common/Components/footer';

import FileGallery from './archivesFileGallery';

/* Main export file to index that combines all "archives" components */

export default class Archives extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <HalfTitle header='Archives' imgSrc='./Images/Archives/Archives_Title_D7_JMU.jpeg' position={15} brightness={70}/>
                <FileGallery />
                <Footer />
            </div>
        )
    }
}