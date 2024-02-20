import React, {Component} from 'react'
import '../Stylesheets/leadershipBio.css'
import Navbar from '../../../../Trash/navbar'
import Footer from '../../../components/Footer/Footer'
import {BOARD, COUNCIL} from '../../../Constants';

/********************************************************************************************************************
** This is a comprehensive file which contains, from the highest level to the lowest level, BioGrid, BioRow, and
** BioText classes. This allows you to simply follow the highest level call and simply pass a single array to
** automatically render the entire Bios page, or you can write custom code to render a row or just the textual
** committee info if you wish to rearrange things your own way.
********************************************************************************************************************/

export default class LeadershipBio extends Component{
    render(){        
        /* BOARD and COUNCIL arrays were originally modeled for just the LeadershipGallery calls. Recall that a 
        ** CommitteeGrid is 2 dimensional (RowsXColumns, but you could say 3-D because each Committee has an
        ** array of people/info), but a BioGrid is just 1 dimensional (Rows where each row is one person).
        ** This means we have to remove an extraneous layer of the array structure (remove a set of brackets)
        ** with the flat(1) method to be able to use the information in our BioGrid call */
        return(
            <div>
                <Navbar />

                <div className = 'bio_background'>
                    <h1 className = 'bio_heading'>Board</h1>
                    <BioGrid bioRows = {BOARD.flat(1)} />

                    <h1 className = 'bio_heading'>Council</h1>
                    <BioGrid bioRows = {COUNCIL.flat(1)} />
                </div>

                <Footer />
            </div>
        )
    }
}

/*==USAGE GUIDE===================================================================================================
**  DESCRIPTION:
**      This class receives the BOARD or COUNCIL array which has been broken by one level into rows.
**      From there, that array of rows is further mapped into individual rows, and each individual
**      row is mapped into the info arrays of each individual Person. If the info array of an
**      individual person specifies a preferred bioImgSrc to display on their bio than that will be
**      used, otherwise, by default, the image that is displayed in the LeadershipGallery will be displayed.
**      From there, the selected image and the info array for each person is passed on to the BioRow class.
**  PROPS:
**      bioRows: matrix, array of all commitee rows. This should be the BOARD or COUNCIl array flat()-end by one level
**  RETURNS:
**      BioGrid component which renders all biographies, aka a collection of rows. Each row is itself a bio for one
**      person.
**==============================================================================================================*/
class BioGrid extends Component{
    render(){
        const bioRows = this.props.bioRows

        return(
            <div className = 'bio_grid_parent'>
                {bioRows.map((row, index) => (
                    <div>
                        {row.info.map((info, infoIndex) => (
                            //if bioImgSrc specified in info, use it, otherwise default to the generic committee image
                            <BioRow key={infoIndex} imgSrc={info.bioImgSrc ? info.bioImgSrc : row.imgSrc} info={info} />
                        ))}
                    </div>
                ))}
            </div>
        )
    }
}

/*==USAGE GUIDE===================================================================================================
**  DESCRIPTION:
**      This class receives the source path to an image and some personal information about a B&C member.
**      It will create a BioRow, aka a single biography for a person contained in a div-row. It calls the BioText
**      class by breaking the array of personal information into Strings and passing those Strings as props.
**  PROPS:
**      imgSrc: string, path to the image of choice
**      info:   array, contains textual information about a person
**  RETURNS:
**      BioRow component, aka a single biography for a person contained in a div-row.
**==============================================================================================================*/
class BioRow extends Component{
    render(){
        const imgSrc = this.props.imgSrc
        const info   = this.props.info

        if(!info.bio) return(<></>) //if no bio provided, assumed that person has yet to submit one and we render nothing
        
        else{
            return(
                //we add the person's name as a unique ID to the row so we can link to that specific div in the gallery
                <section className = 'bio_row_parent' id={info.name}>
                    <img src = {imgSrc} className = 'bio_img' />

                    <div>
                        <BioText name = {info.name} pronouns = {info.pronouns} year = {info.year} major = {info.major}
                        city = {info.city} bio = {info.bio} />
                    </div>
                </section>
            )
        }
    }
}

/*==USAGE GUIDE===================================================================================================
**  DESCRIPTION:
**      This class receives textual information about a B&C member and returns a formatted text block, presumably
**      from an "info" array in the BioGrid calling pattern, but can also be used on its own to generate custom
**      biographies.
**  PROPS:
**      name:     String, person's name
**      pronouns: String, person's pronouns. No need for parentheses, that is auto-rendered
**      year:     String, person's year (e.g. 1st year)
**      major:    String, info about a person's major/minor
**      city:     String, person's hometown
**      bio:      String, a blurb of text to render, will obviously need to ask the person for this.
**  RETURNS:
**      BioText component, formatted text display for a single person.
**==============================================================================================================*/
class BioText extends Component{
    render(){
        const name     = this.props.name
        const pronouns = this.props.pronouns
        const year     = this.props.year
        const major    = this.props.major
        const city     = this.props.city
        const bio      = this.props.bio

        return(
            <div className = 'bio_text_container'>
                <h1 className = 'bio_name'>{name} ({pronouns})</h1>

                <h2 className = 'bio_h2'>{year}</h2>
                <h2 className = 'bio_h2'>{major}</h2>
                <h2 className = 'bio_h2'>{city}</h2>
                <p className = 'bio_text'>{bio}</p>
            </div>
        )
    }
}