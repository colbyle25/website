import React, {useState, Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import jsonp from 'jsonp'
import '../Stylesheets/emailsignup.css'

//ideas: update the home page to have an image carousel, have a historic pictures showcase, new about us section with large stats/awards details, bulletin section with news/postings
//collage wall that uses adobe api to fill a little panel with random pictures. if error, just display default pictures

function EmailSignup(){
    const [email, setEmail] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        const url = "https://oyfaatuva.us4.list-manage.com/subscribe/post-json?u=06c31be345165e241d2affc73&amp;id=11be915f14&amp;f_id=00ad07e9f0";
        jsonp(`${url}&EMAIL=${email}`, { param: 'c' }, (_, data) => {
            const { msg, result } = data
            alert(msg)
        });
    };

        return(
            <section>
            <form onSubmit={onSubmit} method="post" id="mc-embedded-subscribe-form" 
            name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                {/* Start grid row */}
                <div className="row">
                {/* start grid column */}
                <div className="col-3">
                    <p className='email_label'>
                    Subscribe to This Week in OYFA (WIO)
                    </p>
                </div>
                {/* end Grid column */}

                {/* start grid column */}
                <div className="col-md-6">
                    {/* Email input */ }
                    <div className="form-outline form-white">
                    <input type='email' name="EMAIL" value={email} id='mce-EMAIL' onChange={e=> setEmail(e.target.value)}
                    placeholder = 'Email Address' className="form-control email_input" required />
                    </div>
                </div>
                {/* end grid column */}

                {/* start grid column */}
                <div className="col-md-2">
                    {/* Submit button */}
                    <button type="submit" className="btn btn-outline-dark">
                    Subscribe
                    </button>
                </div>
                {/* end grid column */}
                </div>
                {/* end grid row */}
                </form>
            </section>
        )
}

export default EmailSignup