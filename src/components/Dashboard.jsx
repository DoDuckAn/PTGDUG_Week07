import { MdOutlineDashboard } from "react-icons/md";
import { CiFolderOn } from "react-icons/ci";
import { TiGroup } from "react-icons/ti";
import { GrAnalytics } from "react-icons/gr";
import { MdIntegrationInstructions } from "react-icons/md";
import version from "../assets/version.png";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineQuestionMark } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { FaFileAlt } from "react-icons/fa";
import { CiImport } from "react-icons/ci";
import { CiExport } from "react-icons/ci";
import { GoPencil } from "react-icons/go";
import { useState } from "react";

const Dashboard=()=>{
    const [isOpen,setIsOpen]=useState(false);
    return(
        <div className="grid grid-cols-[1fr_3fr] grid-rows-[1fr_9fr] h-screen w-screen bg-gray-500">
            <div className="row-span-2 bg-white flex flex-col items-center justify-between rounded-lg border p-7 max-w-[400px]">
                <div className="flex flex-col gap-4 items-start justify-start w-[100%]">
                    <img src=""/>
                    <div className="flex items-center justify-start gap-3 px-3 py-1 rounded-md bg-pink-500 w-[100%]">
                        <MdOutlineDashboard />
                        <p>Dashboard</p>
                    </div>
                    <div className="flex items-center justify-start gap-3 px-3 py-1 rounded-md bg-pink-500 w-[100%]">
                        <CiFolderOn />
                        <p>Projects</p>
                    </div>
                    <div className="flex items-center justify-start gap-3 px-3 py-1 rounded-md bg-pink-500 w-[100%]">
                        <TiGroup />
                        <p>Teams</p>
                    </div>
                    <div className="flex items-center justify-start gap-3 px-3 py-1 rounded-md bg-pink-500 w-[100%]">
                        <MdOutlineDashboard />
                        <p>Analytics</p>
                    </div>
                    <div className="flex items-center justify-start gap-3 px-3 py-1 rounded-md bg-pink-500 w-[100%]">
                        <GrAnalytics />
                        <p>Message</p>
                    </div>
                    <div className="flex items-center justify-start gap-3 px-3 py-1 rounded-md bg-pink-500 w-[100%]">
                        <MdIntegrationInstructions />
                        <p>Integrations</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-[100%] rounded-lg p-6 bg-blue-300 gap-4">
                    <img src={version} width={200} height={600} className="contain-content"/>
                    <p className="font-bold text-lg">V2.0 is available</p>
                    <button className="round-mf bg-white border-blue-500 p-4 w-[100%] text-blue-500 border-2">Try now</button>
                </div>
            </div>
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
            <div className="bg-white flex flex-col items-start justify-start gap-5 p-9 border">
                <div className="flex gap-3 justify-start items-center">
                    <MdOutlineDashboard size={40} className="text-pink-500"/>
                    <p className="font-bold text-[30px]">OverView</p>
                </div>
                <div className="flex gap-8 mb-5 justify-between items-center w-[100%]">
                    <div className="flex justify-between items-start p-3 rounded-md bg-pink-300 min-w-[30%]">
                        <div className="flex flex-col gap-4 items-start justify-start">
                            <p className="font-bold">Turnover</p>
                            <p className="font-bold text-[40px]">$92,405</p>
                            <div className="flex">
                                <p className="text-green-700">5.39%</p><span className="text-gray-600">period of change</span>
                            </div>
                        </div>
                        <button className="border-1 border-pink-600 p-1 rounded-md"><CiShoppingCart size={30}/></button>
                    </div>
                    <div className="flex justify-between items-start p-3 rounded-md bg-blue-300 min-w-[30%]">
                        <div className="flex flex-col gap-4 items-start justify-start">
                            <p className="font-bold">Profit</p>
                            <p className="font-bold text-[40px]">$32,218</p>
                            <div className="flex">
                                <p className="text-green-700">5.39%</p><span className="text-gray-600">period of change</span>
                            </div>
                        </div>
                        <button className="border-1 border-blue-500 p-1 rounded-md"><FaDollarSign size={30}/></button>
                    </div>
                    <div className="flex justify-between items-start p-3 rounded-md bg-blue-300 min-w-[30%]">
                        <div className="flex flex-col gap-4 items-start justify-start">
                            <p className="font-bold">New customer</p>
                            <p className="font-bold text-[40px]">298</p>
                            <div className="flex">
                                <p className="text-green-700">5.39%</p><span className="text-gray-600">period of change</span>
                            </div>
                        </div>
                        <button className="border-1 border-blue-500 p-1 rounded-md"><RxAvatar size={30}/></button>
                    </div>
                </div>
                <div className="flex justify-between items-center w-[100%]">
                    <div className="flex items-center justify-center gap-4">
                        <FaFileAlt size={40} className="text-pink-500"/>
                        <p className="font-bold text-[40px]">Detailed report</p>
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                        <button onClick={()=>setIsOpen(true)} className="flex p-2 border-1 border-pink-500 gap-2 rounded-md items-center justify-center">
                            <CiImport className="text-pink-500" size={30}/>
                            <span className="text-pink-500">Import</span>
                        </button>
                        <button className="flex p-2 border-1 border-pink-500 gap-2 rounded-md items-center justify-center">
                            <CiExport className="text-pink-500" size={30}/>
                            <span className="text-pink-500">Export</span>
                        </button>
                        {isOpen && (
                        <div className="fixed inset-0 bg-blue-200 bg-opacity-20 flex items-center justify-center z-50">
                        {/* Modal content */}
                        <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
                            <h2 className="text-xl font-bold mb-4">Enter order</h2>
                            <p className="mb-4">content</p>

                            <div className="flex justify-end">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Đóng
                            </button>
                            </div>
                        </div>
                        </div>)}
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start w-[100%]">
                    <table border={1} className="w-full table-auto border">
                        <tr>
                            <th className="text-left"><input type="checkbox" /></th>
                            <th className="text-left">CUSTOMER NAME</th>
                            <th className="text-left">COMPANY</th>
                            <th className="text-left">ORDER VALUE</th>
                            <th className="text-left">ORDER DATE</th>
                            <th>STATUS</th>
                            <th></th>
                        </tr>
                        <tr>
                        <th><input type="checkbox" /></th>
                            <td>
                                <div className="flex items-center justify-start gap-2">
                                    <img src={version} width={50} height={50} className="rounded-[100%]"/>
                                    <p className="font-bold text-lg">Eliz</p>
                                </div>
                            </td>
                            <td className="text-left">AvatarSystems</td>
                            <td className="text-left">$539</td>
                            <td className="text-left">10/07/2024</td>
                            <td>
                                <div className="p-1 flex items-center justify-center rounded-md text-green-400 bg-green-200">
                                    New
                                </div>
                            </td>
                            <td>
                                <button className="bg-white border-0"><GoPencil size={20}/></button>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="flex justify-between items-center w-full">
                    <p>63 results</p>
                    <div className="flex gap-2 items-center justify-center">
                        <button>left</button>
                        <button className="rounded-[100%] bg-pink-500 p-1">
                            1
                        </button>
                        <button>right</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Dashboard