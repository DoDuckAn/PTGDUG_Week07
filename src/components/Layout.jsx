import { MdOutlineDashboard } from "react-icons/md";
import version from "../assets/version.png";
import { CiShoppingCart } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { FaFileAlt } from "react-icons/fa";
import { CiImport } from "react-icons/ci";
import { CiExport } from "react-icons/ci";
import { GoPencil } from "react-icons/go";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "./Dashboard";

const Layout=()=>{
    const [isOpen,setIsOpen]=useState(false);
    return(
        <div className="grid grid-cols-[1fr_4fr] grid-rows-[1fr_9fr] h-full w-full bg-gray-500 min-w-[1600px]">
            <div className="row-span-2">
                <Sidebar/>
            </div>
            <div>
               <Header/>
            </div>
            <div>
                <Dashboard/>
            </div>
        </div>
    )
}

export default Layout