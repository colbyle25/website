import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../Stylesheets/leadershipIntro.css';
import { oyfaAge, B_C_YOUTUBE_EMBED_ID } from '../../../Constants';
import YoutubeEmbed from '../../_Common/Components/youtubeEmbed';

export default class LeadershipIntro extends Component{
    render(){
        let append = 'th'
        if(oyfaAge % 10 == 1) append = 'st' 
        else if(oyfaAge % 10 == 2) append = 'nd'
        else if(oyfaAge % 10 == 3) append = 'rd'

        var YoutubeComponent = <></>
        if(B_C_YOUTUBE_EMBED_ID != '') 
            var YoutubeComponent = <YoutubeEmbed embedId={B_C_YOUTUBE_EMBED_ID} embedWidth='50%' embedHeight='440px'/>


        return(
            <div className='leadership_intro_background'>
                <h1 className = 'leadership_heading'>{oyfaAge + append} B&C</h1>
        
                <div className='leadership_youtube_container'>
                    {YoutubeComponent}
                </div>
            </div>
        )
    }
}