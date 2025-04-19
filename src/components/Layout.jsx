import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <div className="grid grid-cols-[1fr_4fr] grid-rows-[1fr_9fr] h-full w-full bg-gray-500 min-w-[1600px]">
            <div className="row-span-2">
                <Sidebar/>
            </div>
            <div>
               <Header/>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout