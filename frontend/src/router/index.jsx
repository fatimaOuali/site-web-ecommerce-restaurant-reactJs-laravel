import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/Home.jsx"
import Login from "../pages/Login.jsx"
import Signup from "../pages/Signup.jsx"
import Users from "../pages/Users.jsx"
import NotFound from "../pages/NotFound.jsx"
import Layout from "../layouts/Layout.jsx"

export const router = createBrowserRouter(
    [
        {
            element: <Layout />,
            children:[
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/signup',
                    element: <Signup />
                },
                {
                    path: '/users',
                    element: <Users />
                },
                {
                    path: '*',
                    element: <NotFound />
                },
            ]
        },
        
    ]
)