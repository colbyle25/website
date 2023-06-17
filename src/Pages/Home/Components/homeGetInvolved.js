import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import SocialMedia from '../../Common/Components/socialmedia'
import YoutubeEmbed from '../../Common/Components/youtubeEmbed'
import '../Stylesheets/homeGetInvolved.css'

export default class HomeGetInvolved extends Component{
    render(){
        return(
            <div>
                <div className = 'get_involved_padding'>
                    <HomeSocialMedia />
                </div>
                <div>
                    <HomeDonate />
                </div>
            </div>
        )
    }
}

class HomeSocialMedia extends Component{

    render(){
        const handles = [
            {socialHandle: '@oyfaatuva', icon:'fa-facebook', link:'https://www.facebook.com/groups/oyfaatuva/'},
            {socialHandle: '@oyfatuva', icon:'fa-instagram', link:'https://www.instagram.com/oyfaatuva/'},
            {socialHandle: '@uvaOYFA', icon:'fa-youtube', link:'https://www.youtube.com/user/uvaOYFA'},
            {socialHandle: '@oyfatuva', icon:'fa-twitter', link: 'https://twitter.com/oyfaatuva'}
        ]

        const numOfSocialMediaColumns = 3


        return(
            <div className = 'row'>
                <div className = 'col get_involved_border_div'>
                    <h1 className = 'get_involved_h1 mark'>
                        Come Visit our Socials!
                    </h1>
                    <h3 className = 'get_involved_h3'>
                        See the latest announcements and events and relive Barrio on Youtube
                        <div className = 'get_involved_social_media_container'>
                            <SocialMedia handles={handles} numColumns={numOfSocialMediaColumns} />
                        </div>

                    </h3>
                </div>
                <div className = 'col get_involved_div_no_border'>
                    <YoutubeEmbed embedId="2vajWORwINE" />
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
                    <img src = 'http://www.oyfaatuva.com/images/olympics-f21.jpeg' className = 'donation_img'/>
                </div>
                <div className = 'col get_involved_div_no_border'>
                    <h1 className = 'get_involved_h1 mark'>
                        Make a Donation
                    </h1>
                    <h3 className = 'get_involved_h3'>
                        Donate towards our yearly Excellence Scholarship, help expand Barrio, and fund community service efforts.
                    </h3>
                    <a href='https://account.venmo.com/u/Kyla-Quimson'>
                    <button className = 'btn btn-outline-dark'>Venmo</button>
                    </a>
                </div>
            </div>
        )
    }
}