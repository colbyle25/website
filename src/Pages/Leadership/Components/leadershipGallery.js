import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../Stylesheets/leadershipGallery.css';

/* idea: calculate row size and accordingly provision row size + 1 columns, also increase the width of the panel for larger row sizes 
** will need another component for this which renders multiple Person components
*/
/* parent TitleScreen class, render a Carousel and Title  */
/* Person take an array and render everything dynamically except for the title */
export default class LeadershipGallery extends Component{
    render(){
        const pic1Info = [
            {name: 'Colby Le', major: 'Computer Science, Data Science', email: 'colby.le.623@gmail.com'},
            {name: 'Bob Le', major: 'doing nothing', email: 'boblesdf@gmail.com'}
        ]

        return(
            <div className = 'gallery_background'>
                <h1 className = 'gallery_heading'>Board</h1>
                <div className = 'row'>
                    <Person imgSrc = 'http://www.oyfaatuva.com/images/officers%2022-23/culture.png'
                            info   = {pic1Info}
                    />

                    <Person imgSrc = 'http://www.oyfaatuva.com/images/officers%2022-23/culture.png'
                            title  = 'Webmaster'
                            info   = {pic1Info}
                    />

                    <Person imgSrc = 'http://www.oyfaatuva.com/images/officers%2022-23/culture.png'
                            title  = 'Webmaster'
                            info   = {pic1Info}
                    />
                </div>
                <h1 className = 'gallery_heading'>Council</h1>
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

class Person extends Component{

/*==USAGE GUIDE===================================================================================================
**  DESCRIPTION:
**      Option-heavy class to return a single B&C image with accompanying info. You will have to pass an imgSrc prop
**      to render an image, and optionally a title prop to render a single title below that image. From there, you
**      you can declare as many names, majors, and emails as you want (this is done because in past years historic
**      has taken duo pictures (and this is in anticipation if there are ever three or more co-chairs).
**  PROPS:
**      imgSrc: string, source of picture
**      info:   matrix, will hold info for individual members for as many members as you want. Optionally specify a
**              name, major, and email for as much info as you want
**  OPTIONAL PROPS (you may or may not want depending if the graphic already has it):
**      title:  string, what position the person holds.
**  RETURNS:
**      Person component which renders a B&C member's image as well as accompanying styled information
**==============================================================================================================*/

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
                    <img src={imgSrc} />
                </div>

                {titleComponent}

                {infoComponent}

            </div>
        )
    }
}