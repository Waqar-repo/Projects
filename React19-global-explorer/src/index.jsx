
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import Error from './components/Error.jsx';
import CountriesDetail from './components/CountriesDetail.jsx';
import Loadinghome from './components/Loadinghome.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>,
    children:[
        {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/country",
    element: <CountriesDetail />,
  },
 
  
    ]
  },

]);
const root = createRoot(document.querySelector('#root'))
root.render(
  
   <RouterProvider router={router} />
  
  )
