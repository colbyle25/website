import React, {Component} from 'react'

import { CURRENT_BNC } from '/src/Constants';
import HalfTitle from '../../../components/HalfTitle/HalfTitle';

import LeadershipGallery from './LeadershipGallery';
import LeadershipIntro from './LeadershipIntro';

/* Main export file to index that combines all "leadership" components */

export default class Leadership extends Component{
    render(){
        return(
            <>
                <HalfTitle header = 'Leadership' imgSrc = {'/Images/Leadership/Leadership_Title_' + CURRENT_BNC + 'B&C.jpg'} brightness={75} position={25} caption='Read Bios' captionLink='/Bios'/>
                <LeadershipIntro />
                <LeadershipGallery />
            </>
        )
    }
}