import {Component} from 'react'
import { Link } from 'react-router-dom';
import './HalfTitle.css'
import Vignette from '../../ui/Vignette/Vignette';
import FadeOnLoadImg from '../../ui/FadeOnLoadImg/FadeOnLoadImg';

/* This is a common title panel which occupies 50% screen height; appears on all pages except Home.

/*==USAGE GUIDE===================================================================================================
**  DESCRIPTION:
**      This is a common title panel which occupies 50% screen height; appears on all pages except Home.
**  PROPS: 
**      header      = string, title text
**      imgSrc      = string, file path to your image or a web link
**  OPTIONAL PROPS:
**      caption     = string, small subheading/caption text 
**      captionLink = string, optional link you want your caption text to link to
**      newTab      = string, 'true' if the link should open in a new tab, else default to same tab
**      brightness  = int, % brightness of image (100 default) if your image is too bright/dim
**      position    = int, vertical position of the image (50 default) to focus on when cropping. Basically if
**                    the image isn't centered when you crop it you can use this to move the center of the img
**                    up or down.
**  RETURNS:
**      HalfTitle component, which is an h1 title portion with an optional p caption, with optional React Link
**      component.
**==============================================================================================================*/

export default class HalfTitle extends Component{
    render(){
        /* default prop values declared at bottom of file */

        /* Because these CSS styles can change depending on the props, we have to use JS to dynamically set them */
        const brightnessStyle = `
            .half_title_img_brightness{
                filter: brightness(${this.props.brightness}%);
            }`

        const positionStyle = `
            .half_title_img_position{
                object-position: center ${this.props.position}%;
            }`

        var newTab = ''
        if(this.props.newTab == 'true') newTab = '_blank'
        
        return(
            <div className = 'half_title_container'>
                <style>{brightnessStyle}</style>
                <style>{positionStyle}</style>
                <FadeOnLoadImg imgPath={this.props.imgSrc} className='half_title_img half_title_img_brightness half_title_img_position'/>
                {/* <img src = {this.props.imgSrc} className = 'half_title_img half_title_img_brightness half_title_img_position fade_in_image'/> */}
                <Vignette/>
                <h1 className ='half_title_heading'>{this.props.header}</h1>
                <Link to={this.props.captionLink} target={newTab}>
                    <p className='half_title_caption'>{this.props.caption}</p>
                </Link>
            </div>
        )
    }
}

HalfTitle.defaultProps = {
    brightness: 100,
    position: 50
}