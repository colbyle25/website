import {Component} from 'react'

import HalfTitle from '../../../components/HalfTitle/HalfTitle'

import LinkGallery from './linksLinkGallery';

/* Main export file to index that combines all "links" components */

export default class Links extends Component{
    render(){
        return(
            <div>
                <HalfTitle header = 'Links' imgSrc = './Images/Links/Links_Title_Culturefest.jpeg'
                brightness={80} position={35} />
                <LinkGallery />
            </div>
        )
    }
}