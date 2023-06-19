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