import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './homeGetInvolved.css'
import SocialMedia from './socialmedia'

export default class HomeGetInvolved extends Component{

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
                <div className = 'col div'>
                    <h1 className = 'h1'>
                        Come Visit our Socials!
                    </h1>
                    <h3 className = 'h3'>
                        See the latest announcements and events and relive Barrio on Youtube
                    </h3>
                </div>
                <div className = 'col div'>
                    <SocialMedia handles={handles} numColumns={numOfSocialMediaColumns}/>
                </div>
            </div>
        )
    }
}