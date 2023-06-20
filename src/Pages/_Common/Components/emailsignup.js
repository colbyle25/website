import React, {useState, Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import jsonp from 'jsonp'
import '../Stylesheets/emailsignup.css'
import { MAILCHIMP_BASE_URL } from '../../../Constants'

/* if you need to replicate mailchimp integration with a new form design, tutorial at
** https://blog.afrieirham.com/how-to-integrate-mailchimp-with-react
** and the github repo attatched in that article */

function EmailSignup(){
    const [email, setEmail] = useState('')

    const onSubmit = e => {
        e.preventDefault();
        jsonp(`${MAILCHIMP_BASE_URL}&EMAIL=${email}`, { param: 'c' }, (_, data) => {
            const { msg, result } = data
            alert('Check Your Email!')
        })
    }

        return(
            <section>
            <form onSubmit={onSubmit} method="post" id="mc-embedded-subscribe-form" 
            name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                {/* Start grid row */}
                <div className="row">
                    {/* start grid column */}
                    <div className="col-3">
                        <label className='email_label'>
                        Subscribe to This Week in OYFA (WIO)
                        </label>
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


function EmailSignupWithName(){
    const [email, setEmail] = useState('')
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
 
    const onSubmit = e => {
        e.preventDefault()
        const nameUrl = `${MAILCHIMP_BASE_URL}&EMAIL=${email}&FNAME=${fName}&LNAME=${lName}`
        jsonp(nameUrl, { param: 'c' }, (_, data) => {
            const { msg, result } = data
            alert('Check Your Email!')
        })
    }

        return(
            <section>
            <form onSubmit={onSubmit} method="post" id="mc-embedded-subscribe-form" 
            name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                {/* Start grid row */}
                <div className="row email_center">

                    {/* start grid column */}
                    <div className="col-md-10">
                        {/* Email input */ }
                        <div className="form-outline form-white">

                            <div className='row'>
                                <div className = 'col'>
                                    <label className='email_label'> First Name </label>
                                    <input type='text' name='FNAME' value={fName} id = 'mce-FNAME' onChange={e=> setFName(e.target.value)}
                                    placeholder = 'First Name' className = 'form-control email_input email_padding'/>
                                </div>
                                <div className = 'col'>
                                    <label className='email_label'> Last Name </label>
                                    <input type='text' name='LNAME' value={lName} id = 'mce-LNAME' onChange={e=> setLName(e.target.value)}
                                    placeholder = 'Last Name' className = 'form-control email_input email_padding'/>
                                </div>
                            </div>

                            <label className='email_label'> Email </label>
                            <input type='email' name="EMAIL" value={email} id='mce-EMAIL' onChange={e=> setEmail(e.target.value)}
                            placeholder = 'Email Address' className="form-control email_input email_padding" required />

                        </div>
                    </div>
                    {/* end grid column */}

                </div>

                <div className = 'row email_center'>
                    <div className="col-md-10">
                            <button type="submit" className="btn btn-outline-dark">
                            Subscribe
                            </button>
                    </div>
                </div>
                </form>
            </section>
        )
}




export default EmailSignup
export {EmailSignupWithName}