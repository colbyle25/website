/***************************************************************************
** this is the 2nd panel on the Home page, under the title/panorama/carousel.
** it is the main panel of the home page and has the multicolored bordering
** There is a brief introduction paragraph, with a Link component, then a picture,
** and then a header 'How Can I get Involved'. Then a seperate child component
** homeGetInvolved is rendered
**
** uses React <Link> to About, Event, and Leadership page
*/

import {Component} from 'react'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import HomeGetInvolved from './homeGetInvolved';
import '../Stylesheets/homeIntro.css'

export default class Introduction extends Component{

    render(){     
        //JS Date is calculated by years since 1900... ????
        //1988 = 88 years after
        //is it after April? increment the year
        const date = new Date()
        const numOfBnCs = date.getYear() + (date.getMonth() > 4) - 88
        let append = 'th'
        if(numOfBnCs % 10 == 1) append = 'st' 
        else if(numOfBnCs % 10 == 2) append = 'nd'
        else if(numOfBnCs % 10 == 3) append = 'rd'

        /* On this panel we have a row that links to internal pages, you can add a new link by editing this
        ** dictionary here. Use a relative link that matches the router definitions in index */
        const links = [
            {text: "Read about OYFA's heritage and mission", link:'/About'},
            {text: 'View the latest events ', link:'/Events'},
            {text: 'Meet ' + numOfBnCs + append + ' Board and Council', link:'/Leadership'}
        ]

        return(
            /* rendering the introduction header/paragraph */
            <div className = 'intro_parent'>
                <h1 className = 'intro_heading'>Helloyfa!</h1>
                <div className = 'intro_paragraph_container'>
                    <p className = 'intro_paragraph'>
                    Since 1988, OYFA has been the University of Virginia's exclusive Filipino-American undergraduate CIO.
                    OYFA exists to engage all in cultural understanding through its yearly live Barrio performance,
                     positively impact the local community through acts of service and fundraising, and secure a space 
                     for all those who are any part Young, Filipino, and American, or not at all. We engage our vast membership
                     through dozens of annual events, including Barrio Fiesta, our restaurant pop-up Filipino Food Night, 
                     sports tournaments, and the OYFA Excellence Scholarship.
                    </p>
                </div>

                {/* rendering the links row */}
                <div class = 'intro_links_container'>
                    {links.map((item, index) => (
                        <PageLink text={item.text} link={item.link} key={index}/>
                    ))}
                </div>

                 {/* rendering the panorama img */}
                <img 
                    src='./Images/Home/Intro_Culturefest_Panorama.jpeg'
                    className='intro_img'/>

                {/* rendering the get involved header */}
                <h2 className = 'intro_get_involved_heading'>How Can I get Involved?</h2>

                {/* rendering the rest of the panel, check out the homeGetInvolved.js file */}
                <HomeGetInvolved/>
            </div>
        )
    }
}

class PageLink extends Component{
    constructor(props){
        super(props)
    }

    /* from props, render a 'text' label with a 'link'*/
    render(){
        const text = this.props.text
        const link = this.props.link

        return(
            <div>
                <Link to={link} className = 'intro_react_link'>
                    <p className = 'intro_link'>
                        {text}
                        <span><FontAwesomeIcon icon={faCaretRight} className='intro_caret'/></span>
                    </p>
                </Link>
            </div>
        )
    }
}