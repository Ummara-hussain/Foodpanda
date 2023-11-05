import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useNavigate
} from 'react-router-dom'
import { useState, useEffect } from 'react'


import SignIn from '../views/Signin'
import Dashboard from '../views/Dashboard'
import Details from '../views/Detail'
import Header from '../components/Header'
import Homepage from '../views/Homepage'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/restaurants",
                element: <Dashboard />
            },
            {
                path: "/signin",
                element: <SignIn />
            },
            {
                path: "/restro/:restro_id",
                element: <Details />
            }
        ]
    }])

function Router() {
    return <RouterProvider router={router} />
}

function Main() {
    const theme = useSelector(state => state.themeReducer.theme)

    return (
        <div className={theme}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Router