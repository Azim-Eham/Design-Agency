import {Outlet} from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import React from "react";

const RootLayout = () =>{
    return(
        <div>
            <Header />
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default RootLayout