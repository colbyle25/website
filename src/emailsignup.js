import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default class Emailsignup extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <form>
                    <div className = 'row'>
                        <div className = 'col-md-2'>
                            <label>Subscribe to This Week in OYFA (WIO)!</label>
                        </div>
                        <div className = 'col-md-2'>
                            <input type = 'email' name = 'emailInput' /> {/* add width to style later */}
                        </div>
                        <div className = 'col-md-2'>
                            <button type = 'submit' name = 'submitBtn' className = 'btn btn-primary'>
                                <i className ='fa fa-envelope' aria-hidden='false'/> Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )    
    }
}