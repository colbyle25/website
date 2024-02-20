import {Component} from 'react'
import '../Stylesheets/homeTestimonies.css'
import { Carousel } from 'react-bootstrap'

/* To add more Testimonies, simply fill out the content array below accordingly and everything will be 
dynamically rendered for you */

export default class Testimonies extends Component{
    render(){
        const content = [
            {name: 'Richard Dizon',
            startYear: '2014',
            endYear: '2018',
            paragraph: "OYFA gave me the role models I never thought I needed while at UVA. As a first-generation college student, I didn't really know anyone going here and didn't have many people to look up to for guidance in navigating this new space, much less from people who shared a similar cultural heritage as I did. It was inspiring to see what all the upperclassman had accomplished outside of OYFA, being well-rounded leaders in a wide array of other clubs, being successful and balanced through school, and taking on incredible internships and jobs. Since graduating, I've even been inspired to mentor and pass down as much information as I can and lift up my fellow OYFAns to achieve more as well."
            },

            {name: 'Ysabel Sprague',
            startYear: '2017',
            endYear: '2021',
            paragraph: "Being an out-of-state minority student made it difficult to feel at-home at UVA during my first year. Luckily, I found OYFA, an org that celebrated my lesser known culture and gave me a home away from home. Of course, OYFA is not perfect. Its hypersocial culture made me really anxious all the time as an active member. I felt like eyes were on me at all times watching me strive to be the perfect OYFA member. However, if I mess up, I also always felt like voices would start whispering behind my back. But that’s all of UVA, and OYFA has simply fallen into that perfectionist culture. Nevertheless, great events like Barrio, Secret Santa, and various dialogues have shown me the potential of OYFA and never fail to remind me that OYFAmily is forever."
           },

           {name: 'Jana Mirafuente',
           startYear: '2018',
           endYear: 'Present',
           paragraph: "Being apart of OYFA allows me to explore my Filipino identity in a space that is accepting of learning about the culture, and the processes that come along with this. I came to college during a time when I was confused with my cultural identity and had limited connection to other Filipinos outside of my family. OYFA offers a space of acceptance, growth, and a new family away from home. I am so thankful that I made the decision to join my first year. OYFA has shaped my college experience in the best way, and I am forever grateful for the opportunities this organization has afforded me."
          },

        ]

        const timeBeforeSwitch = 5000

        return(
            <div className = 'testimonies_parent'>
                <div className = 'testimonies_margins'>
                    <h1 className = 'testimonies_h1'>Words from members and alumni</h1>
                    
                    <Carousel controls={false} touch={true}>
                        {content.map((item, index) => (
                            <Carousel.Item interval={timeBeforeSwitch} key={index}>
                                <CarouselTestimonyContent
                                    name={item.name}
                                    startYear={item.startYear}
                                    endYear={item.endYear}
                                    paragraph={item.paragraph}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        )
    }
}

class CarouselTestimonyContent extends Component{
    render(){
        const name = this.props.name
        const startYear = this.props.startYear
        const endYear = this.props.endYear
        const paragraph = this.props.paragraph

        return(
            <div>
                <h2 className = 'testimonies_h2'>{name}</h2>
                <p className = 'testimonies_year'>{startYear}-{endYear}</p>
                <p className = 'testimonies_p'>"{paragraph}"</p>
            </div>
        )
    }
}