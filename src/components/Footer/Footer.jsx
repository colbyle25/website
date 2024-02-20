import {Component} from 'react'
import SocialMedia from '../SocialMedia/Socialmedia';
import EmailSignup from '../Emailsignup/Emailsignup';
import './Footer.css'
import { SOCIAL_MEDIA_HANDLES_NO_TEXT, GITHUB_LINK } from '../../Constants';

/********************************************************************************************************************
** This file renders the Footer component, which is a common component that appears on all pages. It contains two
** sections, one with some social media buttons and a WIO signup form, the other with some fine print text and links.
********************************************************************************************************************/

export default class Footer extends Component{

    render(){
        const copyrightYear = new Date().getFullYear()

        const numOfSocialMediaColumns = 3

        return(
            <footer className='text-muted footer'>

                {/* Social media and email section */}
                <section className="footer_section">
                    <div>
                        <div className='footer_section_one_parent'>
                            <div className='footer_social_media_parent'>
                                <SocialMedia handles = {SOCIAL_MEDIA_HANDLES_NO_TEXT} numColumns = {numOfSocialMediaColumns}/>
                            </div>
                            <div className='footer_email_parent'>
                                <EmailSignup />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Social media and email section */}
                <section>
                    <div>
                        <div className="row mt-3">
                            <div className="text-center">
                                <p className = 'footer_disclaimer'>
                                    Although this organization has members who are University of Virginia students 
                                    and may have University employees associated or engaged in its activities and affairs, 
                                    the organization is not a part of or an agency of the University. 
                                    It is a separate and independent organization which is responsible 
                                    for and manages its own activities and affairs. The University does not direct, 
                                    supervise or control the organization and is not responsible for the organization′s contracts, 
                                    acts or omissions.
                                </p>

                                    <p className = 'footer_paragraph'> {/* have to manually add in the white space */}
                                        Website created and maintained by OYFA Webmasters.&nbsp;
                                            <u>
                                            <a href = {GITHUB_LINK} target = '_blank' className = 'footer_anchor'> 
                                        Access code here.
                                            </a>
                                            </u>
                                    </p>

                                {/* someone figure out how to get the previous website as a php file and get a link to it}
                                <p className = 'footer_paragraph'>
                                    Visit the previous website
                                </p>
                                {*/}
                                <p className = 'footer_paragraph'>
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
