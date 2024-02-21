import React, {Component} from 'react'
import '../Stylesheets/LeadershipIntro.css';
import { OYFA_AGE, B_C_YOUTUBE_EMBED_ID } from '/src/Constants';
import YoutubeEmbed from '../../../components/YoutubeEmbed/YoutubeEmbed';

export default class LeadershipIntro extends Component{
    render(){
        let append = 'th'
        if(OYFA_AGE % 10 == 1) append = 'st' 
        else if(OYFA_AGE % 10 == 2) append = 'nd'
        else if(OYFA_AGE % 10 == 3) append = 'rd'

        var YoutubeComponent = <></>
        if(B_C_YOUTUBE_EMBED_ID != '') 
            var YoutubeComponent = <div className='leadership_youtube_container'><YoutubeEmbed embedId={B_C_YOUTUBE_EMBED_ID} embedWidth='50%' embedHeight='440px'/></div>


        return(
            <div className='leadership_intro_background'>
                <h1 className = 'leadership_heading'>{OYFA_AGE + append} BOARD AND COUNCIL</h1>        
                {YoutubeComponent}
            </div>
        )
    }
}