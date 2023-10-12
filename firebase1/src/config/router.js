import{
    createBrowserRouter,
    RouterProvider,
    Outlet
} from 'react-router-dom'
import SignIn from '../views/Signin'
import Signup from '../views/Signup';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <SignIn />,
            },
            {
                path: "/signup",
                element: <Signup />,
            }
        ]
    }
]);

function Router(){
    return <RouterProvider router={router} />
}

function Main(){
    return(
        <div>
            <Outlet />
        </div>
    )
}

export default Router