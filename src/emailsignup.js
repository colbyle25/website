import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

//ideas: update the home page to have an image carousel, have a historic pictures showcase, new about us section with large stats/awards details, bulletin section with news/postings
//collage wall that uses adobe api to fill a little panel with random pictures. if error, just display default pictures

export default class EmailSignup extends Component{
    constructor(props){
        super(props)
        this.state = {
            emailInput: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({
            emailInput: event.target.value
        })
    }
    handleSubmit(event){ // adding behavior later. should add email to WIO mailing list
        event.preventDefault()
        alert('Check your email every Sunday for the WIO!' + this.state.emailInput)
        
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}> {/* call handleSubmit upon submit button pressed */}
                    <div className = 'row'>
                        <div className = 'col-md-2'>
                            <label>Subscribe to This Week in OYFA (WIO)!</label>
                        </div>
                        <div className = 'col-md-2'>
                            <input type = 'email' value={this.state.emailInput} onChange = {this.handleChange}/> {/* textField updates state variable upon change . add width to style later */}
                            <button type = 'submit' name = 'submitBtn' className = 'btn btn-primary'>
                                Submit{' '}<FontAwesomeIcon icon={faEnvelope}/> {/* submit button with an icon spanning. {' '} is to create a whitespace for a little distance between text and icon */}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )    
    }
}