import { IoIosNotifications } from "react-icons/io";
import { MdOutlineQuestionMark } from "react-icons/md";
import version from "../assets/version.png";
const Header=()=>{
    return(
        <div className="bg-white flex items-center justify-between p-7 border">
            <h1 className="text-pink-500">Dashboard</h1>
            <div className="flex gap-3 items-center">
                <div className="flex gap-3">
                    <input type="text" className="p-3 ps-7 rounded-md bg-gray-200 w-[400px]" placeholder="Search" />
                    <button className="bg-white p-0 flex justify-between items-center"><IoIosNotifications size={30}/></button>
                    <button className="bg-white p-0 flex justify-between items-center"><MdOutlineQuestionMark size={30}/></button>
                    <button className="bg-white p-0 flex justify-between items-center"><img src={version} className="rounded-[100%] contain-content w-[60px] h-[60px]"/></button>
                </div>
            </div>
        </div>
    )
}

export default Header