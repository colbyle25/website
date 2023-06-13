import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './footer.css'
import SocialMedia from './socialmedia';
import EmailSignup from './emailsignup';

export default class Footer extends Component{

    render(){
        const handles = [
            {socialHandle: '', icon:'fa-facebook', link:'https://www.facebook.com/groups/oyfaatuva/'},
            {socialHandle: '', icon:'fa-instagram', link:'https://www.instagram.com/oyfaatuva/'},
            {socialHandle: '', icon:'fa-youtube', link:'https://www.youtube.com/user/uvaOYFA'},
            {socialHandle: '', icon:'fa-twitter', link: 'https://twitter.com/oyfaatuva'}
        ]

        const copyrightYear = new Date().getFullYear()

        const numOfSocialMediaColumns = 3

        return(
            <footer className='text-muted footer'>
            <section className="section">
                <div>
                    <div className='row'>
                        <div className='col-md-2 social_media_container'>
                            <SocialMedia handles = {handles} numColumns = {numOfSocialMediaColumns}/>
                        </div>
                        <div className='col-6'>
                            <EmailSignup />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="text-center">
                    <div className="row mt-3">
                        <div className="text-center">
                            <p className = 'disclaimer'>
                                Although this organization has members who are University of Virginia students 
                                and may have University employees associated or engaged in its activities and affairs, 
                                the organization is not a part of or an agency of the University. 
                                It is a separate and independent organization which is responsible 
                                for and manages its own activities and affairs. The University does not direct, 
                                supervise or control the organization and is not responsible for the organization′s contracts, 
                                acts or omissions.
                            </p>

                            <p className = 'paragraph'>
                                Website created and maintained by OYFA Webmasters. Access code here.
                            </p>

                            <p className = 'paragraph'>
                                Visit the previous website
                            </p>
                            
                            <p className = 'paragraph'>
                                Copyright Organization of Young Filipino Americans ©{copyrightYear}. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            </footer>
        )
    }
}
