/* This file exists to consolidate things that may change over the years for easy updating.
** It contains links, long paragraph texts, and other mishmash of stuff. Ideally in the future
** you should migrate any sort of constants to this file so it's all in one place.
** Various files will import constants from this bank here. 
==========================================================================================*/


/* The following constants, BOARD, COUNCIL, and VENMO_LINK need to be updated every year */
/*=================UPDATE EVERY YEAR=================================================================================*/
/*=================UPDATE EVERY YEAR=================================================================================*/
/*=================UPDATE EVERY YEAR=================================================================================*/

/* This is the information for all Board members, which will be rendered on the Leadership page. To understand the
** the brackets, read the documentation in leadershipGallery.js. You may change this bracket layout depending on 
** your own styling. */
export const BOARD = 
    [
            [ /*Row 1================================================================================================*/
            
                    {   /*President*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/president.png',
                        //title:  'President',
                        info:   
                            [
                                {name: 'Angelina Rodriguez', major: 'Echols Interdisciplinary Major in Biology, Psychology, & Anthropology', email: 'amr4rnq@virginia.edu'}
                            ]
                    },

                    {   /*Vice President*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/vice%20president.png',
                        //title:  'Vice President',
                        info:   
                            [
                                {name: 'Nikolle Esteban', major: 'Medical Anthropology and Sociology', email: 'nve4njz@virginia.edu'}
                            ]
                    },

                    {   /*Treasurer*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/treasurer.png',
                        //title:  'Treasurer',
                        info:   
                        [
                            {name: 'Julia Pan', major: 'Neuroscience, Government Minor', email: 'jp5ycx@virginia.edu'}
                        ]
                    },
            ],

            [ //Row 2==================================================================================================
                    
                    {   /*Corresponding Secretary*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/corresponding%20secretary.png',
                        //title:  'Corresponding Secretary',
                        info:   
                            [
                                {name: 'Sam Dioneda', major: 'Nursing', email: 'msd3gjj@virginia.edu'}
                            ]
                    },

                    {   /*Recording Secretary*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/recording%20secretary.png',
                        //title:  'Recording Secretary',
                        info:   
                            [
                                {name: 'Patrick Yuson', major: 'Computer Science & Cognitive Science', email: 'nntu7de@virginia.edu'}
                            ]
                    },

                    {   /*Outreach Coordinator*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/outreach%20coordinator.png',
                        //title:  'Outreach Coordinator',
                        info:   
                            [
                                {name: 'Cheryll Caalim', major: 'Global Public Health w/Pre-Med', email: 'ctc7rv@virginia.edu'}
                            ]
                    }
            ]

    ]   /*END BOARD***********************************************************************************************/


/* This is the information for all Council members, which will be rendered on the Leadership page. To understand the
** the brackets, read the documentation in leadershipGallery.js. You may change this bracket layout depending on 
** your own styling. */
export const COUNCIL = 
    [
            [ /*Row 1================================================================================================*/
            
                    {   /*Culture*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/culture.png',
                        //title:  'Culture',
                        info:   
                            [
                                {name: 'Josh De Vera', major: 'Computer Science, Health and Well-Being Minor', email: 'rra6ps@virginia.edu'},
                                {name: 'Adrian Mamril', major: 'Foreign Affairs and Commerce, Concentration in Finance', email: 'scm5ht@virginia.edu'}
                            ]
                    },

                    {   /*Historic*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/historic.png',
                        //title:  'Historic',
                        info:   
                            [
                                {name: 'Maddie Miles', major: 'Biochemistry & Spanish, Biology Minor', email: 'rra6ps@virginia.edu'},
                                {name: 'John Le', major: 'Cognitive Science, Entrepreneurship Minor', email: 'jcl6mep@virginia.edu'}
                            ]
                    },

                    {   /*Membership*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/membership.png',
                        //title:  'Membership',
                        info:   
                            [
                                {name: 'Jasmine Wang', major: 'Political & Social Thought and English, Data Science Minor', email: 'sqp8eu@virginia.edu'},
                                {name: 'Larry Egalla', major: 'Aerospace Engineering', email: 'fmd4hs@virginia.edu'}
                            ]
                    }
            ],

            [ //Row 2==================================================================================================
                    
                    {   /*Public Relations*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/public%20relations.png',
                        //title:  'Public Relations',
                        info:   
                            [
                                {name: 'Alyssa Manalo', email: 'ajw3tt@virginia.edu'},
                                {name: 'Christopher Collins', major: 'Architecture', email: 'cgc4sbm@virginia.edu'}
                            ]
                    },

                    {   /*Community*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/community.png',
                        //title:  'Community',
                        info:   
                            [
                                {name: 'Maggie Hilado', major: 'Applied Statistics w/Pre-Med', email: 'yaf2pf@virginia.edu'},
                                {name: 'Marian Herboso', major: 'Psychology & Youth and Social Innovation', email: 'vrn4qr@virginia.edu'}
                            ]
                    },

                    {   /*Social*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/social.png',
                        //title:  'Social',
                        info:   
                            [
                                {name: 'Jared Mirt', major: 'Biomedical Engineering, Computer Science Minor', email: 'jam9qbq@virginia.edu'},
                                {name: 'Ariane Tiongco', major: 'Commerce, Japanese Minor', email: 'apt3tv@virginia.edu'}
                            ]
                    }
            ],

            [ //Row 3==================================================================================================
                    
                    {   /*Sports*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/sports.png',
                        //title:  'Sports',
                        info:   
                            [
                                {name: 'Kyla Quimson', major: 'Economics', email: 'zjb2pq@virginia.edu'},
                                {name: 'Franceszca Penaredondo', major: 'Nursing', email: 'nrg8ut@virginia.edu'}
                            ]
                    },

                    {   /*Advocacy*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/advocacy.png',
                        //title:  'Advocacy',
                        info:   
                            [
                                {name: 'Tori Ochave', major: 'Art', email: 'jcp9cb@virginia.edu'},
                                {name: 'Priscilla Saldana', major: 'English', email: 'ssv7vb@virginia.edu'}
                            ]
                    },

                    {   /*District 7*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/district%207.png',
                        //title:  'District 7',
                        info:   
                            [
                                {name: 'Lauren Asperin', major: 'Biochemistry', email: 'nrm3jz@virginia.edu'},
                                {name: 'Rob Cajes', major: 'Neuroscience, Sociology Minor', email: 'sjd8sr@virginia.edu'}
                            ]
                    }
            ],

            [ //Row 4==================================================================================================
                    
                    {   /*Webmasters*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/webmasters.png',
                        //title:  'Webmasters',
                        info:   
                            [
                                {name: 'Franceska Coo', major: 'Computer Science', email: 'fdp6kz@virginia.edu'},
                                {name: 'Bernard Gonzales', major: 'Computer Science & Linguistics', email: 'qja8kc@virginia.edu'}
                            ]
                    },

                    {   /*Scholarship*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/scholarship.png',
                        //title:  'Scholarship',
                        info:   
                            [
                                {name: 'Alex Paras', major: 'Biochemistry w/Pre-Med', email: 'ksg5eu@virginia.edu'},
                                {name: 'Britney "Brit" Hoang', major: 'Foreign Affairs and American Studies', email: 'rcq5jz@virginia.edu'}
                            ]
                    },

                    {   /*Student Advisors*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/student%20advisors.png',
                        //title:  'Student Advisors',
                        info:   
                            [
                                {name: 'Arabella Chiang', major: 'Statistics, Social Entreprenuership Minor', email: 'ac7pje@virginia.edu'},
                                {name: 'Jake Ochave', major: 'Commerce', email: 'jco9dz@virginia.edu'}
                            ]
                    }
            ]

    ]   /*END COUNCIL******************************************************************************************************/

/* Current year's treasurer link, used in HomeGetInvolved */
export const VENMO_LINK = 'https://account.venmo.com/u/Kyla-Quimson'




/*=================LESS LIKELY TO CHANGE YEAR-TO-YEAR=====================================================================*/
/*=================LESS LIKELY TO CHANGE YEAR-TO-YEAR=====================================================================*/
/*=================LESS LIKELY TO CHANGE YEAR-TO-YEAR=====================================================================*/


/* Mailchimp WIO Root Form Posting Link, used in EmailSignup */
export const MAILCHIMP_BASE_URL = 'https://oyfaatuva.us4.list-manage.com/subscribe/post-json?u=06c31be345165e241d2affc73&amp;id=11be915f14&amp;f_id=00ad07e9f0'

/* Github link, used in footer */
export const GITHUB_LINK = ''

/* Previous website link, used in footer */
export const PREVIOUS_WEBSITE_LINK = ''

/* social media, used on HomeGetInvolved and the footer */
export const FACEBOOK_LINK = 'https://www.facebook.com/groups/oyfaatuva/'
export const INSTAGRAM_LINK = 'https://www.instagram.com/oyfaatuva/'
export const YOUTUBE_LINK = 'https://www.youtube.com/user/uvaOYFA'
export const TWITTER_LINK = 'https://twitter.com/oyfaatuva'

/* Common Social Media Handles Array for passing as props to SocialMedia.js routine */
export const SOCIAL_MEDIA_HANDLES = [
    {socialHandle: '@oyfaatuva', icon:'fa-facebook', link: FACEBOOK_LINK},
    {socialHandle: '@oyfatuva', icon:'fa-instagram', link: INSTAGRAM_LINK},
    {socialHandle: '@uvaOYFA', icon:'fa-youtube', link: YOUTUBE_LINK},
    {socialHandle: '@oyfatuva', icon:'fa-twitter', link: TWITTER_LINK}
]
export const SOCIAL_MEDIA_HANDLES_NO_TEXT = [
    {socialHandle: '', icon:'fa-facebook', link: FACEBOOK_LINK},
    {socialHandle: '', icon:'fa-instagram', link: INSTAGRAM_LINK},
    {socialHandle: '', icon:'fa-youtube', link: YOUTUBE_LINK},
    {socialHandle: '', icon:'fa-twitter', link: TWITTER_LINK}
]

/* current age in years of OYFA as well as # of B&Cs there has been */
export const oyfaAge = new Date().getFullYear() - 1988 + 1;

/* Dr. Rob Labuguen quote on About page, here for conciseness */
export const quoteText = "In 1988 Cyn Romero, Brod Bello, and a few other Filipino students wanted to form an organization that stood out from the other ones that already existed. They wanted one that would be more inclusive, not one that isolated itself from outsiders. This new organization was never meant to be exclusive at all. Its members fully welcomed anyone, Filipino or not, who wanted to hang out with them and who could tolerate − or even contribute to − their quirkiness. To say ‘I can′t join OYFA; I′m not Filipino’ was not a good enough reason not to join; we′d reply, ‘So?’ Moreover, they wanted to be more involved in other parts of the University, not just their own members. Primarily, they wanted the members to have fun, while at the same time learning to get along, work, and have fun. Most important of all, the organization′s members would learn something about their own culture and would share it with others. Why? To truly understand Filipinos − and therefore ourselves − we really need to know where we have come from. So, OYFA was born..."

/* Present-day OYFA info on About page, you may want to change this */
export const aboutText = `OYFA is a multi-generational organization now spanning ${oyfaAge} concurrent years as a mature CIO at the University of Virginia. In those years, the organization has accumulated a wealth of history, achievement, and accolades. Now far beyond its origins as a purely social club, the organization has evolved to take on a concrete mission and vastly expanded in influence and membership.`