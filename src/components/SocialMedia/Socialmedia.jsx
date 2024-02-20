import {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Socialmedia.css'

/* allows you to use all icons, check here for full list: https://fontawesome.com/search?o=r&f=brands */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';

/*==USAGE GUIDE===================================================================================================
**  DESCRIPTION:
**      Renders a grouping of social media buttons, optionally labeled, with active links. You are able to choose
**      the amount of Bootstrap columns you want the buttons to be placed in, because some usages may need a wider
**      grouping than others. You have two options for how your icons look: in your handles dictionary, you can set
**      a socialHandle field so that the account name appears below the FontAwesome icon, or just have the icon alone.
**  PROPS:
**      handles:    array, dictionary containing (check SocialHandle class documentation):
**                      * iconName
**                      * link
**                      * (optionally) socialHandle
**  OPTIONAL PROPS:
**      numColumns: int, will place the button+label inside a col-{numColumns} div. Otherwise default to the size
**      of the array you passed.
**  RETURNS:
**      SocialMedia component, which is a group of social media buttons in a row div.
**==============================================================================================================*/
export default class SocialMedia extends Component{

    render(){
        /*    Example for defining handles dictionary with bottom socialHandle text
        **
        **    const handles = [
        **        {socialHandle: 'oyfaatuva', icon:'fa-facebook'},
        **        {socialHandle: '@oyfatuva', icon:'fa-instagram'},
        **        {socialHandle: '@uvaOYFA', icon:'fa-youtube'},
        **        {socialHandle: '@oyfatuva', icon:'fa-twitter'}
        **    ]
        */

        /*    Example for defining col-md class. You may want to try diff numbers for a grid or more/less space
        **
        **    numColumns = handles.length
        **    <SocialMedia handles = {handles} numColumns = {numColumns} />
        */

        const handles    = this.props.handles
        const numColumns = this.props.numColumns

        library.add(fab) //add all brand logos to the icon library for this file

        //map all the social media handles into a row div
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

/*==USAGE GUIDE===================================================================================================
**  PROPS:
**      numColumns:   int, will place the button+label inside a col-{numColumns} div.
**      iconName:     string, name of the FontAwesome icon to use. You will need to cross-reference this with their
**                    website.
**      link:         string, link to the social media account.
**  OPTIONAL PROPS:
**      socialHandle: string, renders a label underneath the icon.
**  RETURNS:
**      SocialHandle component: an icon and optional label linked to a social media account.
**==============================================================================================================*/
class SocialHandle extends Component{

    render(){
        const socialHandle = this.props.socialHandle
        const iconName = this.props.iconName
        const numColumns = this.props.numColumns
        const link = this.props.link

        return(
            <div className = {'col-' + numColumns}>
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