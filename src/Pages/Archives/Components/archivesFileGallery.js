import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../Stylesheets/archivesFileGallery.css';

export default class FileGallery extends Component{
    render(){

        const files = 
            [
                {name: 'OYFA Constitution', imgSrc: './Images/Archives/Archives_Preview_Constitution.png', link: 'https://docs.google.com/document/d/1haR6qSnU0WI45C-wj2Ez2XEHqMeekQ3Sk_eB_Vyu74M/edit?usp=sharing'},
                {name: 'B&C Archive', imgSrc: './Images/Archives/Archives_Preview_B&C_Archive.png', link: './Files/Archives_B&C_Archive.pdf'},
                {name: 'Solidarity Statement', imgSrc: './Images/Archives/Archives_Preview_Solidarity_Statement.png', link: './Files/Archives_Solidarity_Statement.pdf'}
            ]

        return(
            <div className = 'archives_background'>
                <div className = 'archives_container row'>
                    {files.map((file, index) => (
                        <File key = {index} name={file.name} imgSrc={file.imgSrc} link={file.link}/>
                    ))}
                </div>
            </div>
        )
    }
}

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