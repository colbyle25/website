import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../Stylesheets/aboutMission.css'

export default class Mission extends Component{
    /* USAGE
    /* simply declare/change an array of the text you want, and add
    ** a new MissionRow according to the documentation in that class */

    render(){
        const culturePoints = [
            "OYFA's defining mission is to connect members and the community with Filipino culture. We hold two major showcases a year, namely Barrio in the springtime, featuring modern and traditional choreography, original skit, and live music to narrate a contemporary cultural theme."
        ]
        const communityPoints = [
            "OYFA maintains a community amongst its members/alumni and also considers its position in the wider context of Filipino-American identity.",
            "blah blah this is to make the image biggerrrrrrsalkdfja;lsfj;alskdfjasklkldafjal;sdfj;alskdfj"
        ]
        const professionalPoints = [
            "With an extensive network of alumni, representing decades of clases, OYFA offers far-reaching mentoring capacity. Our support for young alumni enables current members to be paired with a former Oyfan mentor from their career field of choice, and creates continuation in OYFA's membership far beyond graduation." ,
            "The annual Excellence Award, presented at that year's Barrio, presents a talented first-year student with a $500 scholarship. The Excellence Scholarship is funded through our events and maintained by the Scholarship committee, who are tasked with further promoting academic excellence.",
            "OYFA strives to produce leaders in the wider community. The Board and Council is a formally elected governing and programming body over the organization; leadership development and opportunities are also available for general body members to run large events such as Barrio and through workshopping. Oyfans emerge more skilled, thoughtful, independent, and culturally-minded after their time in the organization.",
        ]
        const dialoguePoints = [
            "OYFA represents UVa's contribution to District 7 of the Filipino Intercollegiate Networking Dialogue (FIND D-7), a larger network of collegiate Fil-Am organizations. Exchange and interaction between our sister organizations runs deep, including the annual D-7 charity Winter Classic co-rec football tournament.",
            "Part of OYFA's mission is to import external viewpoints while emphasizing shared experiences. Our Symposiums invite Filipino guests of honor to forge a lasting bond with Oyfans."
        ]

        return(
            <div className = 'mission_background'>
                <MissionRow
                    orientation = 'text-left'
                    header = 'Culture'
                    bulletpoints = {culturePoints}
                    imgSrc = 'https://cdn.myportfolio.com/9755d902-8051-452b-84dd-f728e491ca8f/c10de9b8-fedb-4340-9620-1debe0821e45_rw_1920.jpg?h=100b6f6b5d9dc74cfe23e606f61849fa' />
                <MissionRow
                    orientation = 'text-right'
                    header = 'Community'
                    bulletpoints = {communityPoints}
                    imgSrc = 'https://cdn.myportfolio.com/9755d902-8051-452b-84dd-f728e491ca8f/735bce99-21ae-4bcf-baaf-5ffdd5f0064d_rw_1920.jpg?h=44326ad5de6c6f117fe0d2292e8e766a' />
                <MissionRow
                    orientation = 'text-left'
                    header = 'Professional Development'
                    bulletpoints = {professionalPoints}
                    imgSrc = 'https://cdn.myportfolio.com/9755d902-8051-452b-84dd-f728e491ca8f/384ac500-36a5-4033-b181-e0924293115b_rw_1920.jpg?h=df8fae8d15602cf98cb5c464f382fd55' />
                <MissionRow
                    orientation = 'text-right'
                    header = 'Dialogue'
                    bulletpoints = {dialoguePoints}
                    imgSrc = './Images/About/About_Ylona.jpg' />
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
    **  returns:
    **      row-class div with top padding
    */

    render(){
        const orientation  = this.props.orientation
        const header       = this.props.header
        const bulletpoints = this.props.bulletpoints
        const imgSrc       = this.props.imgSrc

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

        /* set the content for the final content panes rendered to the columns */
        let leftContent = <div />
        let rightContent = <div />

        if(orientation == 'text-left'){
            leftContent = (
                <div>
                    {headerH2}
                    {bulletpointList}
                </div>
            )
            
            if(imgSrc.length > 0) // if an optional img is actually passed than render image, else render nothing
                rightContent = missionImg
        }
        else{
            if(imgSrc.length > 0) // if an optional img is actually passed than render image, else render nothing
                leftContent = missionImg

            rightContent = (
                <div>
                    {headerH2}
                    {bulletpointList}
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