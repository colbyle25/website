import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Navbar from './Pages/Common/Components/navbar';
import TitleScreen from './Pages/Home/Components/homeTitle';
import Introduction from './Pages/Home/Components/homeIntro';
import Testimonies from './Pages/Home/Components/homeTestimonies';
import Footer from './Pages/Common/Components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <TitleScreen />
    <Introduction />
    <Testimonies />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
