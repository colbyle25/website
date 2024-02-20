import {Component} from 'react'

import HalfTitle from '../../../components/HalfTitle/HalfTitle';

import FileGallery from './archivesFileGallery';

/* Main export file to index that combines all "archives" components */

export default class Archives extends Component{
    render(){
        return(
            <div>
                <HalfTitle header='Archives' imgSrc='./Images/Archives/Archives_Title_D7_JMU.jpeg' position={15} brightness={70}/>
                <FileGallery />
            </div>
        )
    }
}