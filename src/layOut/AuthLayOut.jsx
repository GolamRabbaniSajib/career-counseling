import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import AOS from "aos";
import { useEffect } from "react";
const AuthLayOut = () => {
    useEffect(()=>{
        AOS.init({duration:1200})
      })
    return (
        <div className="font-libre overflow-x-hidden">
            <header>
                <Navbar></Navbar>
            </header>
            <main className="bg-cyan-50 py-6">
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayOut;