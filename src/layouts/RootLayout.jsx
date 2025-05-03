import {Outlet} from "react-router-dom";
import Header from "../components/layout/Header";
import React from "react";

const RootLayout = () =>{
    return(
        <div>
            <Header />
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default RootLayout