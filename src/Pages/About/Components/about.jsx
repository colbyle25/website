import {Component} from 'react'

import HalfTitle from '../../../components/HalfTitle/HalfTitle';

import History from './aboutHistory';
import Mission from './aboutMission';

/* Main export component to index that combines all "About" components */

export default class About extends Component{
    render(){
        return(
            <div>
                <HalfTitle header = 'About' imgSrc = './Images/About/About_Title_Battle.jpeg'
                brightness={80} position={40}/>
                <History />
                <Mission />
            </div>
        )
    }
}