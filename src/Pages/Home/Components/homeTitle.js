/********************************************************************************************************
** This is the Title page, the first part of the home screen you see when visiting oyfaatuva.com
** This code is very decomposed for your convinience, parent TitleScreen class renders a react-bootstrap
** carousel. Carousel uses Array.map to dynamically render Carousel.Items for each dictionary you pass as
** props in the content array. The parent class also renders a Title component.
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
        content.push(
            {
                imgSrc: 'https://cdn.myportfolio.com/9755d902-8051-452b-84dd-f728e491ca8f/84f1e3b9-ac85-4ac2-8dee-acb2c487b489_rw_1920.jpg?h=9a1c3e4034b553d54d0d54625700bbb7',
                captionHeader: '1st Year Modern, Barrio 2023',
                captionPara: 'Watch the performance',
                link: 'https://www.youtube.com/watch?v=zWFKvAuphp8&ab_channel=OYFAatUVA'
            } 
        )
        content.push(
            {
                imgSrc: 'https://cdn.myportfolio.com/9755d902-8051-452b-84dd-f728e491ca8f/66963ab4-bced-4991-9de7-c5175a4c7fdf_rw_1920.jpg?h=d78d1cc1108de68c81fa482d1de3575f',
                captionHeader: '4th Year Modern, Barrio 2023',
                captionPara: 'View more pictures',
                link: ''
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
            <Carousel>
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
                <a href = {this.props.link} className = 'title_link'>
                    <p className = 'title_caption_paragraph'>{this.props.captionPara}</p>
                </a>
                </Carousel.Caption>
            </div>
        )
    }
}
