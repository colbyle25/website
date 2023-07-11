/********************************************************************************************************
** This is the Title page, the first part of the home screen you see when visiting oyfaatuva.com
** This code is very decomposed for your convinience, parent TitleScreen class renders a react-bootstrap
** carousel. Carousel uses Array.map to dynamically render Carousel.Items for each dictionary you pass as
** props in the content array. The parent class also renders a Title component.
**
** for API documentation on the react-bootstrap Carousel, visit https://react-bootstrap.netlify.app/docs/components/carousel/
*/

import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Carousel} from 'react-bootstrap';
import '../Stylesheets/homeTitle.css';

/* parent TitleScreen class, render a Carousel and Title  */
export default class TitleScreen extends Component{
    render(){

        /* Carousel Variables */
        const timeBeforeSwitch = 5000 //time in milliseconds
        const content = [] //push more content in the following format to automatically add new slides as you see fit
        const imgDir = './Images/Home/' //images for this file are in public/Images/Home
        
        content.push(
            {
                imgSrc: imgDir + 'Title_First_Year_Modern.jpeg',
                captionHeader: '1st Year Modern, Barrio 2023',
                captionPara: 'Watch the performance',
                link: 'https://www.youtube.com/watch?v=zWFKvAuphp8&ab_channel=OYFAatUVA'
            } 
        )
        content.push(
            {
                imgSrc: imgDir + 'Title_Fourth_Year_Modern.jpeg',
                captionHeader: '4th Year Modern, Barrio 2023',
                captionPara: 'View more pictures',
                link: 'https://uvaoyfa.myportfolio.com/oyfa-2022-2023'
            } 
        )        
        //continue as you see fit

        return(
            <div className = 'w-100'>
                {<TitleCarousel timeBeforeSwitch={timeBeforeSwitch} content = {content}/>}
                <Title/>
            </div>
        )
    }
}

class Title extends Component{
    render(){
        return(
            <div className = 'title_parent'>
                <h1 className = 'title_h1'>
                    Organization of Young
                </h1>
                <h1 className = 'title_h1'>
                    Filipino Americans
                </h1>
          </div>
        )
    }
}

class TitleCarousel extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const timeBeforeSwitch = this.props.timeBeforeSwitch
        const content = this.props.content

        return(
            <Carousel fade={true} indicators={false} touch={true}>
                {content.map((item, index) => (
                    <Carousel.Item interval={timeBeforeSwitch} key={index}>
                        <CarouselContent
                            imgSrc={item.imgSrc}
                            captionHeader={item.captionHeader}
                            captionPara={item.captionPara}
                            link={item.link}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        )
    }
}

class CarouselContent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className = 'title_img_container'>
                    <img className = 'title_img' alt='Image' src={this.props.imgSrc}/>
                </div>
                <Carousel.Caption className = 'title_caption'>
                <h3 className = 'title_caption_header'>{this.props.captionHeader}</h3>
                <a href = {this.props.link} target='_blank' className = 'title_link'>
                    <p className = 'title_caption_paragraph'>{this.props.captionPara}</p>
                </a>
                </Carousel.Caption>
            </div>
        )
    }
}
