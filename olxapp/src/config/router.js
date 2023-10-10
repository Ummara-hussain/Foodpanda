import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useNavigate
} from "react-router-dom"

import Product from "../views/Product";
import Details from "../views/Details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/products",
                element: <Product />,
            },
            {
                path: "/products/:id",
                element: <Details />,
            }
        ]
    }
]);


function Router() {
    return <RouterProvider router={router} />
}

function Main() {
    const navigate = useNavigate()

    return <div>
        <h1>Header</h1>
        <button onClick={() => navigate('/products')}>Show Products</button>
        <Outlet />

        <h1>Footer</h1>
    </div>
}

export default Router

