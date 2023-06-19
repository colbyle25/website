import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import SocialMedia from './socialmedia';
import EmailSignup from './emailsignup';
import '../Stylesheets/footer.css'
import { SOCIAL_MEDIA_HANDLES_NO_TEXT } from '../../../Constants';

export default class Footer extends Component{

    render(){
        const copyrightYear = new Date().getFullYear()

        const numOfSocialMediaColumns = 3

        return(
            <footer className='text-muted footer'>
                <section className="footer_section">
                    <div>
                        <div className='row'>
                            <div className='col-md-4'>
                                <SocialMedia handles = {SOCIAL_MEDIA_HANDLES_NO_TEXT} numColumns = {numOfSocialMediaColumns}/>
                            </div>
                            <div className='col'>
                                <EmailSignup />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="text-center">
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

                                <p className = 'footer_paragraph'>
                                    Website created and maintained by OYFA Webmasters. Access code here.
                                </p>

                                <p className = 'footer_paragraph'>
                                    Visit the previous website
                                </p>
                                
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
