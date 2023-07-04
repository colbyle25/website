import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../Stylesheets/aboutHistory.css'
import { quoteText, aboutText } from '../../../Constants'

/* Main export component to index that combines all "About" components */

export default class History extends Component{
    render(){
        const currYear = new Date().getFullYear();

        return(
            // quote section
            <div className = 'history_background'>
                <h1 className = 'history_heading'>1988</h1>
                <p className = 'history_text'>History text here</p>

                <div className = 'history_quote_parent'>
                    <h1 className = 'history_quotation1'>"</h1>
                    <p className = 'history_quote'>{quoteText}</p>
                    <h1 className = 'history_quotation2'>"</h1>
                    <p className = 'history_quote_author'> - Dr. Ron Labuguen</p>
                </div>

            {/* Image section */}
            <div className = 'row history_img_parent'>
                <HistoryRowImg imgSrc = 'https://cdn.myportfolio.com/9755d902-8051-452b-84dd-f728e491ca8f/5913f134-5015-4e10-8c1f-bf7c14469f5b_rw_1920.jpg?h=196c3a1737e8f0276875b34a2d3fc2e8'/>
                <HistoryRowImg imgSrc = 'https://cdn.myportfolio.com/9755d902-8051-452b-84dd-f728e491ca8f/88e00a32-ab93-4095-bc14-e7929e1c1989_rw_600.jpg?h=468a567abffadea77e4bd188805b3490' />
                <HistoryRowImg imgSrc = 'https://cdn.myportfolio.com/9755d902-8051-452b-84dd-f728e491ca8f/72b49e4b-8b59-48c9-9704-79b77a982160_rw_600.jpg?h=74fb44f181e121fc6e146db2db540ef7' />
            </div>

            {/* Today section*/}
                <h1 className = 'history_heading'>{currYear}</h1>
                <div className = 'history_quote_parent'>
                    <p className = 'history_quote'>{aboutText}</p>
                    <div className = 'row'>
                        <div className = 'col-4'>
                            <img src = 'https://cdn.myportfolio.com/9755d902-8051-452b-84dd-f728e491ca8f/072e2b93-c21f-438b-8b51-fa9694c867aa_rw_1920.jpg?h=3153c5e061f64524affff500bde0c298' className = 'award_img'/>
                        </div>
                        <div className='col-4'>
                            <img src = './Images/About/About_CIO_Award.jpg' className = 'award_img'/>
                        </div>

                        <div className = 'col-4'>
                            <img src = 'https://cdn.myportfolio.com/9755d902-8051-452b-84dd-f728e491ca8f/75a2967a-0a10-40bd-93b9-c8a560bb4254_rw_1920.jpg?h=4ae1058222cb65bafb8388177a22bcd1' className = 'award_img' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class HistoryRowImg extends Component{
    render(){
        const imgSrc = this.props.imgSrc

        return(
            <div className = 'col-md-4'>
                <img className = 'history_img' src = {imgSrc}></img>
            </div>
        )
    }
}