import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../Stylesheets/halfTitle.css'
import PropTypes from 'prop-types'

/* This is a common title panel which occupies 50% screen height; appears on all pages except Home.
**
** Usage Guide:
** PROPS: 
** header = header text
** imgSrc = file path to your image or a web link
**
** OPTIONAL PROPS:
** para = small subheading/caption text 
** brightness = % brightness of image (100 default) if your image is too bright/dim
** pos = vertical position of the image (50 default) to focus on when cropping
*/

export default class HalfTitle extends Component{
    render(){
        /* default prop values declared at bottom of file */
        const brightnessStyle = `
            .half_title_img_brightness{
                filter: brightness(${this.props.brightness}%);
            }`

        const positionStyle = `
            .half_title_img_position{
                object-position: center ${this.props.position}%;
            }`
        
        return(
            <div>
                <style>{brightnessStyle}</style>
                <style>{positionStyle}</style>

                <img src = {this.props.imgSrc} className = 'half_title_img half_title_img_brightness half_title_img_position'/>
                <h1 className ='half_title_heading'>{this.props.header}</h1>
                <p className='half_title_paragraph'>{this.props.para}</p>
            </div>
        )
    }
}

HalfTitle.defaultProps = {
    brightness: 100,
    position: 50
}