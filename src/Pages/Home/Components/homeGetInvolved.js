import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import SocialMedia from '../../_Common/Components/socialmedia'
import YoutubeEmbed from '../../_Common/Components/youtubeEmbed'
import {EmailSignupWithName} from '../../_Common/Components/emailsignup'
import '../Stylesheets/homeGetInvolved.css'
import * as Constants from '../../../Constants'

/* ATTENTION: If you are performing yearly upkeep, you will want to change the venmo link
** in the src/Constants file to the current Treasurer...
*/

/* Contains the three rows you see below the "How Can I get Involved" header 
** Each row has its own class, uses bootstrap row/col gridding to have a left/right section
*/

export default class HomeGetInvolved extends Component{
    render(){
        return(
            <div>
                <div className = 'get_involved_padding'>
                    <HomeSocialMedia />
                </div>
                <div className = 'get_involved_padding'>
                    <HomeDonate />
                </div>
                <div>
                    <HomeEmail />
                </div>
            </div>
        )
    }
}

class HomeSocialMedia extends Component{

    render(){
        const numOfSocialMediaColumns = 3

        return(
            <div className = 'row'>
                <div className = 'col get_involved_border_div'>
                    <h1 className = 'get_involved_h1 mark'>
                        Come Visit our Socials!
                    </h1>
                    <h3 className = 'get_involved_h3'>
                        See the latest announcements and events and relive Barrio on Youtube.
                        <div className = 'get_involved_social_media_container'>
                            <SocialMedia handles={Constants.SOCIAL_MEDIA_HANDLES} numColumns={numOfSocialMediaColumns} />
                        </div>

                    </h3>
                </div>
                <div className = 'col get_involved_div_no_border'>
                    {/* if you change this youtube link, go to the Common/Components/youtubeEmbed.js file and change the size dimensions*/}
                    <YoutubeEmbed embedId='2vajWORwINE' />
                </div>
            </div>
        )
    }
}

class HomeDonate extends Component{

    render(){

        return(
            <div className = 'row'>
                <div className = 'col get_involved_border_div'>
                    <img src = './Images/Home/Get_Involved_Sports.jpeg'
                    className = 'get_involved_img'/>
                </div>
                <div className = 'col get_involved_div_no_border'>
                    <h1 className = 'get_involved_h1 mark'>
                        Make a Donation
                    </h1>
                    <h3 className = 'get_involved_h3'>
                        Donate towards our yearly Excellence Scholarship, help expand Barrio, and fund community service efforts.
                    </h3>
                    {/* THIS LINK WILL CHANGE YEAR TO YEAR */}
                    <a href={Constants.VENMO_LINK} target='_blank'>
                    <button className = 'btn btn-outline-dark'>Venmo</button>
                    </a>
                </div>
            </div>
        )
    }
}

class HomeEmail extends Component{
    render(){
        return(
            <div className = 'row'>
                <div className = 'col get_involved_border_div'>
                    <h1 className = 'get_involved_h1 mark'>
                        Subscribe to our Email List
                    </h1>
                    <h3 className = 'get_involved_h3'>
                        This Week in OYFA (WIO) is sent every Sunday and features the latest news and games.
                    </h3>
                    <EmailSignupWithName className = 'get_involved_email'/>
                </div>
                <div className = 'col get_involved_div_no_border'>
                    <img src = './Images/Home/Get_Involved_35th_B&C.jpeg'
                    className = 'get_involved_img' />
                </div>
            </div>
        )
    }
}