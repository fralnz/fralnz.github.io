import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Home from './routes/Home.tsx'
import './styles/index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root.tsx";
import Projects from "./routes/Projects.tsx";
import Contact from "./routes/Contact.tsx";
import About from "./routes/About.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {index: true, element: <Home/>},
            {
                path: '/about',
                element: <About/>,
            },
            {
                path: '/projects',
                element: <Projects/>,
            },
            {
                path: '/contact',
                element: <Contact/>,
            },
        ]
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
