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
                                {name: 'Angelina Rodriguez', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/angie.png', pronouns: 'she/her', year: '4th year', major: 'Echols Interdisciplinary Major in Biology, Psychology, & Anthropology', email:'amr4rnq@virginia.edu', city: 'Chesapeake, Virginia', bio:"Hello everyone! I hope this bio finds you well. I'm Angie, and I am your president for the 2022-2023 year! Given this is my last year at UVA and in OYFA, I really want to make it a special and memorable one. I'm excited to work alongside all the underclassmen that I've seen grow, and meet the new generation of oyfans to come. Feel free to reach out to me whenever and about whatever--I'd love to hear from you!"},
                            ]
                    },

                    {   /*Vice President*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/vice%20president.png',
                        //title:  'Vice President',
                        info:   
                            [
                                {name: 'Nikolle Esteban', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/nikolle.png', pronouns: 'she/her', year: '4th year', major: 'Medical Anthropology and Sociology', email:'nve4njz@virginia.edu', city: 'NOVA', bio:"Mabuhay and thanks for stopping by our website! I'm excited to spend my last year at UVA dedicating time to the organization that has given me several life lessons and even more life-long friends. OYFA is all about community building, so whether or not you're young, Filipino, or American, I hope you can find a people and a place to love in these four years. See you soon! :)"}
                            ]
                    },

                    {   /*Treasurer*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/treasurer.png',
                        //title:  'Treasurer',
                        info:   
                            [
                                {name: 'Julia Pan', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/julia.png', pronouns: 'she/her', year: '3rd year', major: 'Neuroscience, Government Minor', email: 'jp5ycx@virginia.edu', city: 'Chesapeake, VA', bio:"Hello everyone! I'm Julia Pan, your treasurer for this year! In my free time, I am often watching a new show or grabbing food with others. So reach out anytime if you would like to grab a meal with me at anytime! I'm trying to pick up daily reading again so also lmk if you have any book recommendations. Can't wait to meet all of you and to host financial literacy nights to share some financial tips! <3"}
                            ]
                    },
            ],

            [ //Row 2==================================================================================================
                    
                    {   /*Corresponding Secretary*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/corresponding%20secretary.png',
                        //title:  'Corresponding Secretary',
                        info:   
                            [
                                {name: 'Sam Dioneda', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/sam.png', pronouns: 'he/him', year: '3rd year', major: 'Nursing', email: 'msd3gjj@virginia.edu', city: 'Chesapeake, VA', bio:"Hi I'm Sam! I'm use he/him pronouns and am a 3rd year nursing student :3. I hope you've found your way around the website LOL and hopefully in OYFA! When I'm not doing OYFA stuff you can usually find me tending to my 3 (maybe 4 by the time you read this) beautiful sons... that are goldfish, running, reading manga and or cooking hehe. Please feel free to reach out to me if you need anything, and any others as well. Be awesome, do awesome things, and eat well! See ya around!"}
                            ]
                    },

                    {   /*Recording Secretary*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/recording%20secretary.png',
                        //title:  'Recording Secretary',
                        info:   
                            [
                                {name: 'Patrick Yuson', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/patrick.png', pronouns: 'he/him', year: '2nd year', major: 'Computer Science and Cognitive Science', email: 'nntu7de@virginia.edu', city: 'Richmond, VA', bio:"What's up, guys! I'm your Recording Secretary for this year, so please feel free to reach out to me about anything WIO related or to j talk >:) A little bit about myself, I love to play volleyball, listen to music, and hang out with friends! Be sure to subscribe to the WIO to stay in the know about upcoming events and everything OYFA related!"}
                            ]
                    },

                    {   /*Outreach Coordinator*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/outreach%20coordinator.png',
                        //title:  'Outreach Coordinator',
                        info:   
                            [
                                {name: 'Cheryll Caalim', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/cheryll.png', pronouns: 'she/her', year: '3rd year', major: 'Global Public Health w/Pre-Med', email: 'ctc7rv@virginia.edu', city: 'Virginia Beach, VA', bio:"I joined OYFA to learn more about my Filipino heritage, and it’s been a blast getting to know such amazing individuals along the way! As Outreach Coordinator, I am beyond excited to connect OYFA and its members to resources and opportunities to elevate our identity as well as our overall well-being! Favorite Quote: “It is good to love many things, for therein lies the true strength, and whosoever loves much performs much, and can accomplish much, and what is done in love is well done.” - Vincent Van Gogh"}
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
                                {name: 'Josh De Vera', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/josh.png', pronouns: 'he/him', year: '3rd year', major: 'BSCS with a minor in health and well-being', email: 'jvd7eqj@virginia.edu', city: 'Manassas, VA', bio:"Hello! It’s me, Josh, your 35th culture chair and I’m excited to bring the good vibes and energy to OYFA this year through Culturefest, Barrio, and all the events we have this year! I can’t wait to see everyone and get closer as an OYFamily hehe. Reach out if you wanna play sports or eat food (or both)!"},
                                {name: 'Adrian Mamaril', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/adrian.png', pronouns: 'he/him', year: '4th year', major: 'Commerce (Finance and Accounting) and Foreign Affairs', email: 'scm5ht@virginia.edu', city: 'Manila, Phillipines', bio:"ask me anything!! I want to help you get through all the confusion, academics, resources, career, etc.! Instagram: adrian_mamaril_"}
                            ]
                    },

                    {   /*Historic*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/historic.png',
                        //title:  'Historic',
                        info:   
                            [
                                {name: 'Maddie Miles', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/maddie.png', pronouns: 'she/her', year: '2nd year', major: 'Biochemistry and Spanish with a Biology Minor', email: 'rra6ps@virginia.edu', city: 'Centreville, VA', bio:"Remember your 3 P's - Pascual, Padilla, Pangilinan."},
                                {name: 'John Le', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/john.png', pronouns: 'he/him', year: '4th year', major: 'Cognitive Science and Entrepreneurship Minor', email: 'jcl6mep@virginia.edu', city: 'Sterling, VA', bio:"Heyo, my name is John Le and I am a fan of classical guitar, basketball, photography, meeting new friends, having deep conversations about life, and just vibing to chill music. As a fourth year, it's beginning to hit that everything will soon be my last, so I am trying to make the most of it! If you see me around, please feel free to introduce yourself and let me know how it's going :D. Instagram: @jcl.media Spotify: RA John"}
                            ]
                    },

                    {   /*Membership*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/membership.png',
                        //title:  'Membership',
                        info:   
                            [
                                {name: 'Jasmine Wang', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/jasmine.png', pronouns: 'she/her', year: '2nd year', major: 'Political & Social Thought and English Majors, Data Science Minor', email: 'sqp8eu@virginia.edu', city: 'NOVA', bio:"HAI FRIENDS! I'm Jasmine and I'll be ONE OF YOUR MEM CHAIRS THIS YEAR!! Some lil sound bites about me: I love baking, bereal, kombucha, platform shoes, and have a growing wolf shirt collection (not in a furry kind of way tho). I am so beyond excited to get to know you all and am always down to grab a bite ~phone eats first~, take a walk, or just lounge around :)). hashtag make more MEMories. BeReal: jasminewang Instagram: @jasmine.wangg Venmo: @jasminewangg Bopdrop: jasminewang"},
                                {name: 'Larry Egalla', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/larry.png', pronouns: 'he/him', year: '2nd year', major: 'Aerospace Engineering', email: 'fmd4hs@virginia.edu', city: 'Virginia Beach, VA', bio:"Hellor friends. I am a fun and chill guy who likes to chill and have fun. But I am also your mem chair for the 2022-2023 school year >:))) I like: volleyball (5 year gang), lifting (king of squattopia), rock climbing (i am okay at this one), playing my bass (I am in a band with Patrick and Franceszca. We are called Larry's band), having fun (what can I say), and being chill (what can I say). I like to do things. I also really like talking to people :) I vibe with anyone and everyone. follow me on instagram: @larrrysweatshirt"}
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
                                {name: 'Christopher Collins', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/chris.png', pronouns: 'he/him', year: '3rd year', major: 'Architecture', email: 'cgc4sbm@virginia.edu', city: 'Virginia Beach, VA', bio:"Hello. My name is Christopher Collins. When I am not making oyfa graphics, I like to have long walks on the beach at sunset. My friends say I am quirky, smart, shy, but also fearless. My family [Amihan] and friends are really important to me, especially my board and council bias, Jake Ryan Ochave. I can be silly at times, I love to laugh, I'm down to earth, and I love to travel. People tend to notice my eyes and my smile, and there’s no such thing as a typical Friday night for me. Favorite Quote: 'Live, Laugh, Love', Instagram: @crispy.lifts, Minecraft Username: americanramen"},
                            ]
                    },

                    {   /*Community*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/community.png',
                        //title:  'Community',
                        info:   
                            [
                                {name: 'Maggie Hilado', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/maggie.png', pronouns: 'she/her', year: '2nd year', major: 'Applied Statistics Major on Pre-Med Track', email: 'yaf2pf@virginia.edu', city: 'Woodbridge, VA', bio:"Hello all! I'm Maggie, one of the Ms in CoMMunity! I'm a second year who intends to major in Statistics on the Pre-Med Track. Hobbies include Kpop, anime, gaming, music (pls send OPM recs :P) and trying out new restaurants. I can't wait to get to know everyone and never hesitate to reach out to me if you ever want to hang! Find me studying/vibing in the Multicultural Student Center! Instagram: @maggie.hilado, Favorite Quote: 'Let [him] be King... Me? I'm going to be the deadliest piece on the board.' - The King's Men"},
                                {name: 'Marian Herboso', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/marian.png', pronouns: 'she/her', year: '2nd year', major: 'Youth & Social Innovation and Psychology', email: 'vrn4qr@virginia.edu', city: 'Virginia Beach, VA', bio:"Helloyfa!! I'm Marian and I'm super excited to be one of the Ms in OYFA's CoMMunity <3 Through B&C, I hope that we get to connect you and people outside to their cultural identities, and bring everyone together. I'm grateful for OYFA for bringing me closer to Filipino culture and helping me define who I am, so I want to create a space where our members can feel the same way <3 In my free time, when I'm not drowning myself in school work, you can catch me watching anime, listening to k-pop, playing games, or succumbing to my boba addiction at Moge :,) I'm excited for what's to come! Being a YSI major in the School of Education, I love to advise and mentor people, so please feel free to come to me for anything!!! Hit me up whenever, to talk abt whatever hehe ヽ(⌐■_■)ノ♪♬ - Instagram: @mrnhrbso"}
                            ]
                    },

                    {   /*Social*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/social.png',
                        //title:  'Social',
                        info:   
                            [
                                {name: 'Jared Mirt', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/jared.png', pronouns: 'he/him', year: '4th year', major: 'Biomedical Engineering, CS Minor', email: 'jam9qbq@virginia.edu', city: 'Virginia Beach, VA', bio: "Heyo, I'm Jared and I am your social chair along w Ari. As you can see it is our 4th year so we are ready to have the most radical/ exciting/ wild/ wholesome/ what ever adjective you want - year and we are going to leave this place w a bang (maybe, don't hold that to me). I enjoy: cooking, snowboarding, lifting, volleyball, scary movies, music and gaming. Please reach out if you ever want to hang or have a fun idea for a social outing."},
                                {name: 'Ariane Tiongco', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/ariane.png', pronouns: 'she/her', year: '4th year', major: 'Commerce (Marketing and IT concentrations), Japanese Language and Literature Minor', email: 'apt3tv@virginia.edu', city: 'Virginia Beach, VA', bio: "Hello, my name is Ariane, and I’m super excited to serve as your social committee chair this year. Outside of oyfa, I love to read manga/manhwa, crafting, and give advice about everything, even if I have no idea what I’m talking about. I am currently entering my rhythm gaming and Pilates era. Next con: Otakon 2023"}
                            ]
                    }
            ],

            [ //Row 3==================================================================================================
                    
                    {   /*Sports*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/sports.png',
                        //title:  'Sports',
                        info:   
                            [
                                {name: 'Kyla Quimson', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/kyla.png', pronouns: 'she/her', year: '2nd year', major: 'Economics', email: 'zjb2pq@virginia.edu', city: 'Centreville, VA', bio:"Hey guys! I am a second year economics major, double minoring in real estate and data science. My favorite sports are soccer and volleyball, but I am down to try any sport. I also enjoy shopping, crocheting, and playing the sims. I first got involved in OYFA through volleyball, which became a space where I could de-stress and bond with other people. I am grateful for the community I have found within OYFA and I hope I can attract others into OYFA through sports. Feel free to reach out for anything! If you ask me to go on a boba run, my answer is immediately yes. I'm so so excited to meet everyone <3 - Favorite Quote: 'Maybe I made a mistake yesterday, but yesterday’s me is still me. I am who I am today, with all my faults. Tomorrow I might be a tiny bit wiser, and that’s me, too. These faults and mistakes are what I am, making up the brightest stars in the constellation of my life. I have come to love myself for who I was, who I am, and who I hope to become.' - RM"},
                                {name: 'Franceszca Penaredondo', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/franceszca.png', pronouns: 'she/her', year: '2nd year', major: 'Nursing', email: 'nrg8ut@virginia.edu', city: 'Charlottesville, VA', bio:"Hi fam!! I’m Franceszca and I am serving as one of your sports chairs for this year!! I am a 2nd year majoring in Nursing!! I'm in club volleyball, and I occasionally coach volleyball on the side as well so I’m super excited to bring lots of fun into our upcoming sports events!! Can’t wait for this next year. love yall :) - Favorite Quote: 'Life’s a bore if you don’t challenge yourself” - Nishinoya'"}
                            ]
                    },

                    {   /*Advocacy*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/advocacy.png',
                        //title:  'Advocacy',
                        info:   
                            [
                                {name: 'Tori Ochave', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/tori.png', pronouns: 'she/her', year: '2nd year', major: 'Undecided', email: 'jcp9cb@virginia.edu', city: 'Virginia Beach, VA', bio: "HELLOOOYFA ! My name's Tori Ochave and I'm a 2nd year currently undecided in my major :0 But you can usually find me wandering around arts grounds somewhere... In my free time I love listening to music (kpop..... tswift... its a dangerous combo), making too many spotify playlists, drawing, going to museums, etcccc. It's my first year on B&C and I'm so excited to be one of your advocacy chairs this year !!follow me on spotify (or else) vcochave"},
                                {name: 'Priscilla Saldana', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/priscilla.png', pronouns: 'she/her', year: '2nd year', major: 'English', email: 'ssv7vb@virginia.edu', city: 'Arlington, VA', bio: "Hey, Hey, Heyyy!! My name is Priscilla (but you can call me Pris :)) and I am 1/2 of your advocacy chair (give love to my amazing cochair Tori <33)!! OYFA has given me a space to learn not only about my filipino backgrounds, but also myself. I believe being in the know of what is happening in the Philippines as filipinos is so important, so hopefully I can keep yall informed and advocate for you all <3333 Outside of OYFA, I am also part of an amazing community called FYP (First Year Players)-- a musical theater group hehe. This year I am head of costumes and maybe yall can come watch our shows. Anyways, if you ever need anything HMUU, my DMs are always open! I hope everyone finds a home here in OYFA just like I did!!! -- AdvocATE out snap: @pris5824 insta: @prisclla_saldana bereal: prispanda"}
                            ]
                    },

                    {   /*District 7*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/district%207.png',
                        //title:  'District 7',
                        info:   
                            [
                                {name: 'Lauren Asperin', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/lauren.png', pronouns: 'she/her', year: '2nd year', major: 'Biochemistry', email: 'sjd8sr@virginia.edu', city: 'Virginia Beach, VA', bio:"Hey sexy ;) I'm so glad you're interested in OYFA. I am Lauren Asperin (pronounced like the drug), and I am half of your D7 chairs! When I joined OYFA, I immediately felt like I was part of a family. Now that I can be on council, I can't wait to be a part of so many more memories. Let me know if you need anything, and I'll be right there. D WHAAAAAT???!"},
                                {name: 'Rob Cajes', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/rob.png', pronouns: 'he/him', year: '2nd year', major: 'Neuroscience, Sociology Minor', email: 'sjd8sr@virginia.edu', city: 'Virginia Beach, VA', bio:"D WHAT!?? Yo guys, I'm Rob and I'm one of the co-chairs for D7 this year >:) I'm a big fan of spam musubi, mayochup, hitting PRs, and wendy's. One of my favorite first year oyfa memories was D7 Olympics - shoutout OYFAtree - so I'm super excited to bring the hype with my co-chair Lauren to W&M mwahaha. Can't wait to meet and get to know all the new OYFAns!! Favorite Quote: 'Cheers to that' - Jacob Wells - Instagram: @robert.cajes"}
                            ]
                    }
            ],

            [ //Row 4==================================================================================================
                    
                    {   /*Webmasters*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/webmasters.png',
                        //title:  'Webmasters',
                        info:   
                            [
                                {name: 'Franceska Coo', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/franky.png', pronouns: 'she/her', year: '3rd year', major: 'Computer Science (BS), Data Science', email: 'fdp6kz@virginia.edu', city: 'Alexandria, VA', bio:"hi gang <3 live love laugh oyfa you can always come to me for cafe dates, library study sessions, advice, rants, tea sessions (both physical and metaphorical), thrifting, or any sort of help. i'm here for all of you <3 - instagram: @frenchska (if it's not deactivated rn LOL) also my spotify hehehe: frankydominique"},
                                {name: 'Bernard Gonzales', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/bernard.png', pronouns: 'he/him', year: '2nd year', major: 'Computer Science & Linguistics', email: 'qja8kc@virginia.edu', city: 'Haymarket, VA', bio:"hi !! i'm a second year cs major and i'm so excited to be your webmaster this year ! in my free time, i enjoy sleeping, cooking good food, driving the bus, and playing the organ. catch me stressing about cs in the msc or driving a uts bus around grounds. see ya~ ;) - Instagram: @bernard_gonzales_"}
                            ]
                    },

                    {   /*Scholarship*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/scholarship.png',
                        //title:  'Scholarship',
                        info:   
                            [
                                {name: 'Alex Paras', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/alex.png', pronouns: 'she/her', year: '2nd year', major: 'Biochemistry (Pre-med Track)', email: 'ksg5eu@virginia.edu', city: 'Roanoke, VA', bio:"Hi! I'm Alessandra Paras, but everyone calls me Alex. I was raised in Roanoke, VA where my family became part of a tight-knit Filipino community, in which I learned to love my Filipino roots. Coming to college I wanted to keep that connection to the culture, and I thought that OYFA was a good way to do so! I'm premed student, but in my limited free time I like watching anything and everything on iWantTFC, so if you got recommendations, lmk!!! Favorite Quote: 'It always seems impossible until it's done.' - Nelson Mandela - Instagram: @_alex_paras_"},
                                {name: 'Britney Hoang', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/brit.png', pronouns: 'she/her', year: '2nd year', major: 'Foreign Affairs and American Studies', email: 'rcq5jz@virginia.edu', city: 'NOVA', bio:"Sup. LOL just kidding. Hi there! My name is Brit and I am currently a second-year! I am super excited to be serving as one of your Scholarship chairs this year! Outside of OYFA, I am currently involved with UPC, UDems, and PAFN. Some things that I love are: coffee shops, squishmallows, Korean food, Japanese stationary, shopping, volleyball, Kpop, miniature things, surprise toys, fashion, and BREAD!!! <3 I absolutely love meeting and talking to new people so don't be a stranger! I am always down for anything hehe. Catch me in Nau Hall or the Starbucks in Newcomb :P. Favorite Quote: 'Lachimolala' - Park Jimin - Instagram: @britdaknee, BeReal: missbrit, TikTok: @britdaknee"}
                            ]
                    },

                    {   /*Student Advisors*/
                        imgSrc: 'http://www.oyfaatuva.com/images/officers%2022-23/student%20advisors.png',
                        //title:  'Student Advisors',
                        info:   
                            [
                                {name: 'Arabella Chiang', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/arabella.png', pronouns: 'she/her', year: '4th year', major: 'Statistics, Social Entreprenuership Minor', email: 'ac7pje@virginia.edu', city: 'Ashburn, VA', bio:"HANG OUT WITH ME! EAT WITH ME! ADVENTURE WITH ME! SEE YOU SOON! Favorite Quote: 'Skadoosh'"},
                                {name: 'Jake Ochave', bioImgSrc: 'http://www.oyfaatuva.com/images/b&c%2035/jake.png', pronouns: 'he/him', year: '4th year', major: 'Commerce', email: 'jco9dz@virginia.edu', city: 'Virginia Beach, VA', bio:"'There's always room for a unicorn in my life.' Favorite Quote: 'I am the wisest man alive, for I know one thing, and that is that I know nothing.' - Plato. Feel free to follow me @jakelovesrice on IG, BeReal, etc. Favorite YouTuber: Zogg from Betelgeuse"}
                            ]
                    }
            ]

    ]   /*END COUNCIL******************************************************************************************************/

/* Youtube embed id of the B&C promo video to be displayed on LeadershipIntro component. You can find this by clicking share,
** embed on the current year's video. If there isn't a video for this year leave equal to empty string ''*/
export const B_C_YOUTUBE_EMBED_ID = 'lRoajvsa004'

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