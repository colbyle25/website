import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../Stylesheets/leadershipGallery.css'
import { BOARD, COUNCIL } from '../../../Constants'
/* react-router does not natively support scrolling to specific page sections so we use this add-on package */
import { HashLink } from 'react-router-hash-link'

/********************************************************************************************************************
** This is a comprehensive file which contains, from the highest level to the lowest level, LeadershipGallery,
** CommitteeGrid, CommitteeRow, Person, and PersonInfo classes. This allows you to simply follow the highest level call
** and simply pass a single array to automatically render the entire B&C page, or you can write custom code to 
** render a row, single committee, or just the textual committee info if you wish to rearrange things your own way.
** This is also done in anticipation of change, because say if in the future a new committee has been created, you can
** simply maintain the existing committees in the existing call and then tack on a "Person" class on a new row. 
** You may however need to change the width settings in the CSS file if you try to add a change.
*********************************************************************************************************************
** An Example class is also included in case you need to see how the calls are made.*/

export default class LeadershipGallery extends Component{
    render(){

        return(
            <div className = 'gallery_background'>

                <h1 className = 'gallery_heading'>Board</h1>

                <CommitteeGrid committeeRows = {BOARD} />

                <h1 className = 'gallery_heading'>Council</h1>

                <CommitteeGrid committeeRows = {COUNCIL} />

            </div>
        )
    }
}

/*================================================================================================== 
** THIS IS AN EXAMPLE CLASS THAT YOU CAN RENDER TO SEE HOW TO CALL SOME OF THE CLASSES
** THIS CLASS WILL NOT BE USED IN THE FINAL PRODUCT
==================================================================================================*/
class EXAMPLES extends Component{
    render(){

        // example array used in Person calls
        const pic1Info = [
            {name: 'Colby Le', major: 'Computer Science, Data Science', email: 'colby.le.623@gmail.com'},
            {name: 'Bob Le', major: 'doing nothing', email: 'boblesdf@gmail.com'}
        ]

        return(

            /* I can make my own row and add individual Person components with whatever other stuff I want */
            <div className = 'row person_row'>

                {/* I would probably want to use this pattern over the static CommitteeRow if I wanted to customize it like so */}
                <h1>Me going my own way...</h1>

                {/* each Person component is rendered in an auto-sizing column div */}
                <Person imgSrc = 'http://www.oyfaatuva.com/images/officers%2022-23/culture.png'
                        title  = 'Webmaster'
                        info   = {pic1Info}
                />

                <Person imgSrc = 'http://www.oyfaatuva.com/images/officers%2022-23/culture.png'
                        title  = 'Webmaster'
                        info   = {pic1Info}
                />

                {/* PersonInfo - What if I like how the text is rendered but I want to add my own custom img or video or something*/}
                <PersonInfo name = 'Colby' major = 'CS' email='ncc9kn@virginia.edu' />
                <img src='colby' />

            </div>
        )
    }
}

/*==USAGE GUIDE===================================================================================================
**  DESCRIPTION:
**      You will pass a single array of arrays of arrays of ..., containing all the information from either Board
**      or Council. These arrays are imported from Constants.js. Following the scheme in the lower classes, most
**      fields are optional in this matrix besides imgSrcs and some fields of the info arrays.
**  PROPS:
**      committees: matrix, will hold info for as many committee rows as you want. For each committee row,
**      specify your choice of committees that will be on that row, and for each committee, specify an imgSrc
**      as well as an array called 'info' which may optionally contain the name, major, and email of
**      each committee member for as many committee members as you want.
**  RETURNS:
**      CommitteeGrid component which encapsulates multiple rows, each representing a full CommiteeRow, which itself
**      represents several committees, in a custom parent container which shrinks width and applies margins.
**==============================================================================================================*/
class CommitteeGrid extends Component{
    render(){
        const committeeRows = this.props.committeeRows

        return(
            <div className = 'row person_row committee_grid_container'>
                {committeeRows.map((row, index) => (
                    <CommitteeRow key = {index} committees={row} />
                ))}
            </div>
        )
    }
}

/*==USAGE GUIDE===================================================================================================
**  DESCRIPTION:
**      You will pass a single array of arrays (of arrays?). Following the scheme in the lower classes, most
**      fields are optional in this matrix besides the imgSrc and some fields of the info array.
**  PROPS:
**      committees: matrix, will hold info for as many committees as you want. Specify an imgSrc for each committee,
**                  as well as an array called 'info' which may optionally contain the name, major, and email of
**                  each committee member for as many committee members as you want.
**  RETURNS:
**      CommitteeRow component which encapsulates multiple columns, each representing one committee, in a single
**      Bootstrap row div.
**==============================================================================================================*/
class CommitteeRow extends Component{
    render(){
        const committees = this.props.committees

        return(
            <div className = 'row person_row committee_row_container'>
                {committees.map((committee, index) => (
                    <Person key = {index} imgSrc = {committee.imgSrc} title = {committee.title} info = {committee.info} />
                ))}
            </div>
        )
    }
}

/*==USAGE GUIDE===================================================================================================
**  DESCRIPTION:
**      Option-heavy class to return a single B&C image with accompanying info. You will have to pass an imgSrc prop
**      to render an image, and optionally a title prop to render a single title below that image. From there, you
**      you can declare as many names, majors, and emails as you want (this is done because in past years historic
**      has taken duo pictures (and this is in anticipation if there are ever three or more co-chairs). Therefore,
**      this is represented as a "Person" class but it is also the way to represent a full committee of 2+ people.
**  PROPS:
**      imgSrc: string, source of picture
**      info:   matrix, will hold info for individual members for as many members as you want. Optionally specify a
**              name, major, and email for as much info as you want
**  OPTIONAL PROPS (you may or may not want depending if the graphic already has it):
**      title:  string, what position the person holds.
**  RETURNS:
**      Person component which renders a B&C member's image as well as accompanying styled information
**==============================================================================================================*/
class Person extends Component{
    
    /* main component render */
    render(){
        const imgSrc  = this.props.imgSrc
        const title   = this.props.title
        const info    = this.props.info
    
        /* if title was provided render it */
        if(title){
            var titleComponent =                 
                <div className = 'person_text_container'>
                    <h1 className = 'person_title'>{title}</h1>
                </div>
        }
    
        /* for each person in the info array, map over them and render a PersonInfo component with their information */
        var infoComponent = 
            <div>
                {info.map((item, index) => (
                    <div className = 'person_info_container'>
                        <PersonInfo name = {item.name} major = {item.major} email = {item.email} />
                    </div>
                ))}
            </div>

        return(
            <div className = 'col person_container'>
    
                <div className = 'person_img_container'>
                    <HashLink smooth to = {'/Bios#'+info[0].name} > {/* No idea why but when the page is first loaded the first link service will take you to the wrong section but going back a page and trying again it works perfectly...*/}
                    {/* <a href = {'/Bios#'+info[0].name}> */}
                        <img src={imgSrc} />
                    {/* </a> */}
                    </HashLink>
                </div>
    
                {titleComponent}
    
                {infoComponent}
    
            </div>
        )
    }
}

/*==USAGE GUIDE===================================================================================================
**  DESCRIPTION:
**      Render a blurb of text for a given person using three optional fields. Called by Person class
**  OPTIONAL PROPS (you may or may not want depending if the graphic already has it):
**      name:   string, rendered as bold text under the picture
**      major:  string, major/double major/ + minors, rendered underneath name
**      email:  string, person's email, rendered underneath major text
**  RETURNS:
**      PersonInfo component which renders a B&C member's info
**==============================================================================================================*/
class PersonInfo extends Component{
    render(){
        const name  = this.props.name
        const major = this.props.major
        const email = this.props.email

        let nameComponent
        let majorComponent
        let emailComponent

        if(name)  nameComponent  = <h1 className = 'person_name'>{name}</h1>
        if(major) majorComponent = <h2 className = 'person_major'>{major}</h2>
        if(email) emailComponent = <h2 className = 'person_email'>{email}</h2>

        return(
            <div className = 'person_text_container'>
                {nameComponent}
                {majorComponent}
                {emailComponent}
            </div>
        )
    }
}