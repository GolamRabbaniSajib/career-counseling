import { createBrowserRouter } from "react-router-dom";
import HomeLayOut from "../layOut/HomeLayOut";
import Home from "../pages/Home";
import Details from "../components/details/Details";
import LogIn from "../pages/LogIn";
import AuthLayOut from "../layOut/AuthLayOut";
import Register from "../pages/Register";
import UserRouter from "./UserRouter";
import Profile from "../components/Profile/Profile";
import Forgot from "../components/forgot/Forgot";
import ErrorPage from "../pages/ErrorPage";
import Review from "../pages/Review";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayOut></HomeLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch("/Data.json")
            },
            {
                path: "/review",
                element: <UserRouter><Review></Review></UserRouter>
            },
            {
                path: "/details/:id",
                element: <UserRouter><Details></Details></UserRouter>,
                loader: async ({params}) =>{
                    const res = await fetch("/Data.json")
                    const data = await res.json()
                    const singleData = data.find(d => d.id == params.id)
                    return singleData
                }
            },
            {
                path: "/profile",
                element: <UserRouter><Profile></Profile></UserRouter>
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
            },
            {
                path: "/auth/forgot",
                element: <Forgot></Forgot>
            }
        ]
    }
])

export default router;