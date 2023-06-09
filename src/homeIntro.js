/***************************************************************************
** this is the 2nd panel on the Home page, under the title/panorama/carousel
*/

//continue social media and social media description under the links
import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import './homeIntro.css'

export default class Introduction extends Component{

    render(){     
        //JS Date is calculated by years since 1900...
        //1988 = 88 years after
        //is it after April? increment the year
        const date = new Date()
        const numOfBnCs = date.getYear() + (date.getMonth() > 4) - 88
        const append = 'th'
        if(numOfBnCs % 10 == 1) append = 'st' 
        else if(numOfBnCs % 10 == 2) append = 'nd'
        else if(numOfBnCs % 10 == 3) append = 'rd'

        const links = [
            {text: "Read about OYFA's heritage and mission", link:''},
            {text: 'View the latest events ', link:''},
            {text: 'Meet ' + numOfBnCs + append + ' Board and Council', link:''}
        ]   

        return(
            <div className = 'parent'>
                <h1 className = 'heading'>Helloyfa!</h1>
                <div className = 'paragraph-container'>
                    <p className = 'paragraph'>
                    Since 1988, OYFA has been the University of Virginia's exclusive Filipino-American undergraduate CIO.
                    OYFA exists to engage all in cultural understanding through its yearly live Barrio performance,
                     positively impact the local community through acts of service and fundraising, and secure a space 
                     for all those who are any part Young, Filipino, and American, or not at all.
                    </p>
                </div>
                <div class = 'row'>
                    {links.map((item, index) => (
                        <Link text={item.text} link={item.link} key={index}/>
                    ))}
                </div>
                {/* add facebook instagram stuff */}
            </div>
        )
    }
}

class Link extends Component{
    constructor(props){
        super(props)
    }

    //remember to add in the links after
    render(){
        const text = this.props.text
        const link = this.props.link

        return(
            <div className='col-md-4 link-container'>
                <p className = 'link'>
                    {text}
                    <span><FontAwesomeIcon icon={faCaretRight} className='caret'/></span>
                </p>
            </div>
        )
    }
}