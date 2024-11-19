import { createBrowserRouter } from "react-router-dom";
import HomeLayOut from "../layOut/HomeLayOut";
import Home from "../pages/Home";
import Details from "../components/details/Details";
import LogIn from "../pages/LogIn";
import AuthLayOut from "../layOut/AuthLayOut";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayOut></HomeLayOut>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch("/Data.json")
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: async ({params}) =>{
                    const res = await fetch("/Data.json")
                    const data = await res.json()
                    const singleData = data.find(d => d.id == params.id)
                    return singleData
                }
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayOut></AuthLayOut>,
        children: [
            {
                path: "/auth/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    }
])

export default router;