import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';

import Navbar from './navbar';
import TitleScreen from './title';
import Introduction from './homeIntro';
import EmailSignup from './emailsignup';
import SocialMedia from './socialmedia';
import Footer from './footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<EmailSignup />*/}
    <Navbar />
    <TitleScreen />
    <Introduction />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
