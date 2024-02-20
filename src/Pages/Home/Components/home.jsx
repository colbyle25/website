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
                {/*TODO: Something in Introduction is overflowing and causing a white bar on the right side of mobile screens */}
                <TitleScreen />
                <Introduction />
                <Testimonies />
            </div>
        )
    }
}