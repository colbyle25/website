import {Component} from 'react'

import TitleScreen from './homeTitle';
import Introduction from './homeIntro';
import Testimonies from './homeTestimonies';

/* Main export file to index that combines all "home" components */

export default class Home extends Component{
    render(){
        return(
            <div>
                <title>Home</title>
                <TitleScreen />
                <Introduction />
                <Testimonies />
            </div>
        )
    }
}