/* This is the main file which render all the main components for each page and links each page for the browser*/

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './Pages/Home/Components/home'
import About from './Pages/About/Components/about'
import Events from './Pages/Events/Components/events'
import Links from './Pages/Links/Components/links'
import Leadership from './Pages/Leadership/Components/leadership'
import Archives from './Pages/Archives/Components/archives'

const root = ReactDOM.createRoot(document.getElementById('root'));

/* if adding new pages, add a new route with a relative link pointing to the new page and 
** set the element to the main class of your page 
**
** in general, use React <Link> instead of <a href=''> for navigating between pages (for external websites is ok)
** <a> triggers a refresh which can possibly reset any data we are potentially passing between pages
*/

root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Events' element={<Events />} />
        <Route path='/Links' element={<Links />} />
        <Route path='/Leadership' element={<Leadership />} />
        <Route path='/Archives' element={<Archives />} />
    </Routes>
  </BrowserRouter>
)

// NOTE: AUTOGENERATED TEXT:
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();