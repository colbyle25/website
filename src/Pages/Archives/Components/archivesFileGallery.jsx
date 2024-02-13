import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../Stylesheets/archivesFileGallery.css'
import {FILES} from '../../../Constants'

/********************************************************************************************************************
** This file renders the File Gallery, which is a row of a few components which link to a file. You can add multiple
** rows and manage the row column size however you would like.
********************************************************************************************************************/

/* Render individual files as columns in a Row */
export default class FileGallery extends Component{
    render(){

        return(
            <div className = 'archives_background'>
                <div className = 'archives_container row'>
                    {FILES.map((file, index) => (
                        <File key = {index} name={file.name} imgSrc={file.imgSrc} link={file.link}/>
                    ))}
                </div>
            </div>
        )
    }
}

/*==USAGE GUIDE===================================================================================================
**  DESCRIPTION:
**      Pass the file name, a link to the file (which you should download into Public/Files), and an image
**      preview. You can easily create that by screenshotting the front page of the document and cropping to square
**      dimensions. I also went to Page Setup in Google Docs and changed the background to the offer-white hex color
**  PROPS:
**      imgSrc: string, path to your image preview
**      name:   string, name of your file which will be rendered as a h1 below the img
**      link:   string, link to your web or downloaded file in Public/Files. The whole component will be linked.
**  RETURNS:
**      File component, which is an image and h1 rigged with a link. Also has associated animations/padding
**==============================================================================================================*/
class File extends Component{
    render(){
        const imgSrc = this.props.imgSrc;
        const name   = this.props.name;
        const link   = this.props.link;

        return(
            <div className='col'>

                <a href = {link} target='_blank' className = 'file_link'>

                    <div className = 'file_img_container'>
                        <img src = {imgSrc}/>
                    </div>

                    <h1 className = 'file_heading'>
                        {name}
                    </h1>

                    </a>
            
            </div>
        )
    }
}