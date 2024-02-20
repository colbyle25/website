import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import Home from './Pages/Home/Components/home'
import About from './Pages/About/Components/about'
import Events from './Pages/Events/Components/events'
import Links from './Pages/Links/Components/links'
import Leadership from './Pages/Leadership/Components/leadership'
import Archives from './Pages/Archives/Components/archives'
import LeadershipBio from './Pages/Leadership/Components/leadershipBio'
import RootRouteComponent from './root'

/* If adding new pages, add a new route with a relative link pointing to the new page and 
** set the element to the main class of your page 
**
** In general, use React <Link> instead of anchor <a href=''> for navigating between pages (for external websites is ok)
** <a> triggers a refresh which can possibly reset any data we are potentially passing between pages */

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootRouteComponent />, /**RootRouteComponent is the parent of all the other Routes and will contain all shared Components (ex. 
        Navbar, ScrollToTop) */
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'events',
                element: <Events />,
            },
            {
                path: 'links',
                element: <Links />,
            },
            {
                path: 'leadership',
                element: <Leadership />,
            },
            {
                path: 'archives',
                element: <Archives />,
            },
            {
                path: 'bios',
                element: <LeadershipBio />,
            },
        ]
    }
    
]);

function App() {
    return (
        <RouterProvider router={router}/>            
    );
}
  
export default App;