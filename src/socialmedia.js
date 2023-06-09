import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import './homeIntro.css'

export default class SocialMedia {
    render(){
        return(
            <div>

            </div>
        )
    }
}

class SocialMediaRow{
    render(){
        return(
            <div className = 'row'>
                <div className = 'col-md-4'>
                    <p>
                        <FontAwesomeIcon icon={faCaretRight}/>
                    </p>
                </div>
            </div>
        )
    }
}