import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import AOS from "aos";
import { useEffect } from "react";

const HomeLayOut = () => {
    useEffect(()=>{
        AOS.init({duration:1200})
      })
    return (
        <div className="font-libre overflow-x-hidden">
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
                <Outlet></Outlet>
            </main>
            <footer className="bg-slate-300">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayOut;