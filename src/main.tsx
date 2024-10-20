import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Home from './routes/Home.tsx'
import './styles/index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {index: true, element: <Home/>},

            {
                path: '/projects',
                element: <Home/>,
            },
        ]
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)