import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../Stylesheets/aboutMission.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'

export default class Mission extends Component{
    /* USAGE
    /* simply declare/change an array of the text you want, and add
    ** a new MissionRow according to the documentation in that class */

    render(){
        const identityPoints = [
            "OYFA's defining mission is to connect members and the community with Filipino culture. We hold two major showcases a year, namely Barrio in the springtime, featuring modern and traditional choreography, original skit, and live music to narrate a contemporary cultural theme."
        ]
        const communityPoints = [
            "OYFA maintains a tight-knit community amongst its members/alumni and also connects with the wider context of Filipino-American identity.",
            "Our members enjoy dozens of recurring and new events every year, welcome to all. Our monthly General Body Meetings are agenda-driven gatherings while more informal events like field days, Thanksgiving potluck, and Yoga on the Lawn allow members to further engage with the organization.",
            "The Sports committee organizes tournaments and practices for Volleyball, Soccer, and Football. Meanwhile, the Community committee drives charity initiatives like fundraising for Typhoon Rai relief and food drives."
        ]
        const professionalPoints = [
            "With an extensive network of alumni representing decades, OYFA offers far-reaching mentoring capacity. Our support for young alumni enables current members to be paired with a former Oyfan mentor from their career field of choice, and creates continuation in OYFA's membership far beyond graduation." ,
            "The annual Excellence Award, presented at Barrio, presents a talented first-year student with a $500 scholarship. The Excellence Scholarship is funded through our events and maintained by the Scholarship committee, who are tasked with further promoting academic excellence.",
            "OYFA strives to produce leaders in the wider community. The Board and Council is the organization's formally elected governing and programming body; leadership development and opportunities are also available for general body members to oversee large events such as Barrio and through workshopping. Oyfans emerge more skilled, thoughtful, independent, and culturally-minded.",
        ]
        const dialoguePoints = [
            "OYFA represents UVa's contribution to District 7 of the Filipino Intercollegiate Networking Dialogue (FIND D-7), a larger network of collegiate Fil-Am organizations. Exchange and interaction between our sister organizations runs deep, including the annual D-7 charity Winter Classic co-rec football tournament.",
            "Part of OYFA's mission is to welcome external viewpoints while emphasizing shared experiences. Our symposiums invite Filipino guests of honor to forge a lasting bond with Oyfans."
        ]

        return(
            <div className = 'mission_background'>
                <MissionRow
                    orientation = 'text-left'
                    header = 'Identity'
                    bulletpoints = {identityPoints}
                    imgSrc = './Images/About/About_FFN.jpeg' 
                    imgCaption = 'Homemade plates of barbecue, lumpia, pancit, and desserts are served at Filipino Food Night, a pop-up restaurant experience of Filipino cuisine.' />
                <MissionRow
                    orientation = 'text-right'
                    header = 'Community'
                    bulletpoints = {communityPoints}
                    imgSrc = './Images/About/About_Community_Field_Day.jpeg' />
                <MissionRow
                    orientation = 'text-left'
                    header = 'Professional Development'
                    bulletpoints = {professionalPoints}
                    imgSrc = './Images/About/About_Professional_Ariane.jpeg' />
                <MissionRow
                    orientation = 'text-right'
                    header = 'Dialogue'
                    bulletpoints = {dialoguePoints}
                    imgSrc = './Images/About/About_Ylona.png'
                    imgCaption = "Spring 2023's symosium welcomed 88Rising's Ylona Garcia for live performances and a communal Kamayan dinner." />
            </div>
        )
    }
}

class MissionRow extends Component{
    /* USAGE
    **  props: 
    **      header: bolded playfair header text
    **      bulletpoints: array of info points to render below header
    **      orientation: text-left, text-right: which column to render text portion on
    **      imgSrc: path to image on opposite column of text
    **      imgCaption [optional]: small img caption text
    **  returns:
    **      row-class div with top padding
    */

    render(){
        const orientation  = this.props.orientation
        const header       = this.props.header
        const bulletpoints = this.props.bulletpoints
        const imgSrc       = this.props.imgSrc
        const imgCaption   = this.props.imgCaption

        let left_div_class = 'mission_left_container'
        let right_div_class = 'mission_right_container'

        /* set div classes - text div should be bigger col-8 
        ** set class as "text-left" or "text-right" */
        if(orientation == 'text-left') {
            left_div_class = 'col-8 mission_left_container'
            right_div_class = 'col mission_right_container'
        }
        else{
            left_div_class = 'col mission_left_container'
            right_div_class = 'col-8 mission_right_container'
        }

        /* actual list element rendered */
        const bulletpointList = (
            <div>
                {bulletpoints.map((item, index) => (
                    <p key = {index} className = 'mission_text'>{item}</p>
                ))}
            </div>
        )

        /* actual header element rendered */
        const headerH2 = <h2 className = 'mission_subheading'>{header}</h2>

        /* actual img rendered */
        const missionImg = <img src={imgSrc} className = 'mission_img'/>

        /* actual optional img caption rendered, depending on orientation */
        let missionImgCaption = <></>
        if(orientation == 'text-left' && imgCaption){
            missionImgCaption = (
                <p className = 'mission_img_caption'>{imgCaption}
                    <span><FontAwesomeIcon icon={faCaretRight}/></span>
                </p>
            )
        }
        else if(imgCaption){
            missionImgCaption = (
                <p className = 'mission_img_caption'>
                    <span><FontAwesomeIcon icon={faCaretLeft}/></span>
                    {imgCaption}
                </p>
            )
        }

        /* set the content for the final content panes rendered to the columns */
        let leftContent = <></>
        let rightContent = <></>

        if(orientation == 'text-left'){
            leftContent = (
                <div>
                    {headerH2}
                    {bulletpointList}
                    {missionImgCaption}
                </div>
            )

            rightContent = missionImg
        }
        else{
            leftContent = missionImg

            rightContent = (
                <div>
                    {headerH2}
                    {bulletpointList}
                    {missionImgCaption}
                </div>  
            )          
        }

        /* return final row oriented content based on props */
        return(
            <div className = 'row'>
                <div className = {left_div_class}>
                    {leftContent}
                </div>
                <div className = {right_div_class}>
                    {rightContent}
                </div>
            </div>
        )
    }
}