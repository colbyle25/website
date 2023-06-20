import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import '../Stylesheets/socialmedia.css'

export default class SocialMedia extends Component{

    render(){
        /* the calling convention to create a social media arrangement requires you to pass
        ** a handles dictionary (such as the example commented below) from the calling class.
        ** Several common ones are available for you in src/Constants
        **
        ** You also need to pass the number of col-md columns you want it to render to.
        ** You have two options for how your icons look: in your handles dictionary, you can set
        ** a socialHandle field so that the account name appears to the right of the FontAwesome icon
        ** that you pass in as the icon field. If you leave the socialHandle field as '' (empty string),
        ** the icon will generate alone. This is useful for the footer, for example.
        */

        library.add(fab) //add all brand logos to the icon library for this file

        const handles = this.props.handles

        /*    Example for defining handles dictionary with bottom socialHandle text
        **
        **    const handles = [
        **        {socialHandle: 'oyfaatuva', icon:'fa-facebook'},
        **        {socialHandle: '@oyfatuva', icon:'fa-instagram'},
        **        {socialHandle: '@uvaOYFA', icon:'fa-youtube'},
        **        {socialHandle: '@oyfatuva', icon:'fa-twitter'}
        **    ]
        */

        const numColumns = this.props.numColumns

        /*    Example for defining col-md class. You may want to try diff numbers for a grid or more/less space
        **
        **    numColumns = handles.length
        **    <SocialMedia handles = {handles} numColumns = {numColumns} />
        */

        return(
            <div>
            <div className = 'row'>
                {handles.map((item, index) => (
                    <SocialHandle socialHandle={item.socialHandle} iconName={item.icon}
                    link={item.link} numColumns = {numColumns}key={index}/>
                ))}
            </div>
            </div>
        )
    }
}

class SocialHandle extends Component{

    render(){
        const socialHandle = this.props.socialHandle
        const iconName = this.props.iconName
        const numColumns = this.props.numColumns
        const link = this.props.link

        return(
            <div className = {'col-md-' + numColumns}>
                <a href={link} target='_blank' className='social_link'>
                    <p className='social_paragraph'>
                        <span>
                            <FontAwesomeIcon icon={ 'fa-brands ' + iconName } className='social_icon' />
                        </span>
                        {socialHandle}
                    </p>
                 </a>
            </div>
        )
    }
}