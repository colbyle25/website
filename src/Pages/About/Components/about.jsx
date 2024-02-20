import {Component} from 'react'

import HalfTitle from '../../_Common/Components/halfTitle';

import History from './aboutHistory';
import Mission from './aboutMission';

/* Main export component to index that combines all "About" components */

export default class About extends Component{
    render(){
        return(
            <div>
                <HalfTitle header = 'About' imgSrc = './Images/About/About_Title_Battle.jpeg'
                brightness={80} />
                <History />
                <Mission />
            </div>
        )
    }
}