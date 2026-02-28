
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorElement from './components/ErrorElement.jsx'
import Home from './components/Home.jsx'
import AboutUs from './components/AboutUs.jsx'

const router = createBrowserRouter([
{
    path: '/',
    element: <App />,
    errorElement:<ErrorElement />,
    children:[
        {
        path: '/',
        element: <Home />,
        },
        {
        path: '/about',
        element: <AboutUs />,
        },
    ]

}



])

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />

)
