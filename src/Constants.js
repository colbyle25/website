/* This file exists to consolidate things that may change over the years for easy updating.
** Various files will import constants from this bank here. 
==========================================================================================*/


/* Current year's treasurer link, used in HomeGetInvolved */
export const VENMO_LINK = 'https://account.venmo.com/u/Kyla-Quimson'

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