import { MdOutlineDashboard } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { FaFileAlt } from "react-icons/fa";
import { CiImport } from "react-icons/ci";
import { CiExport } from "react-icons/ci";
import { useEffect, useState } from "react";
import CustomerTable from "./CustomerTable";

const Dashboard=()=>{
    const [isOpen,setIsOpen]=useState(false)
    const [overviewData,setOverviewData]=useState([{money:null,change:null},{money:null,change:null},{money:null,change:null}])
    useEffect(()=>{
        fetch('https://67fb62ab8ee14a542629e092.mockapi.io/stats')
        .then((res)=> res.json())
        .then((data)=>{
            setOverviewData(data)
        })
        .catch(err=>{
            console.log('lỗi khi fetch overview:',err);
        })
    },[])

    return(
        <div className="bg-white flex flex-col items-start justify-start gap-5 p-9 border h-full w-full">
            <div className="flex gap-3 justify-start items-center">
                <MdOutlineDashboard size={40} className="text-pink-500"/>
                <p className="font-bold text-[30px]">OverView</p>
            </div>
            <div className="flex gap-8 mb-5 justify-between items-center w-[100%]">
                <div className="flex justify-between items-start p-3 rounded-md bg-pink-300 min-w-[30%]">
                    <div className="flex flex-col gap-4 items-start justify-start">
                        <p className="font-bold">Turnover</p>
                        <p className="font-bold text-[40px]">${overviewData[0].money}</p>
                        <div className="flex">
                            <p className="text-green-700">{overviewData[0].change}%</p><span className="text-gray-600">period of change</span>
                        </div>
                    </div>
                    <button className="border-1 border-pink-600 p-1 rounded-md"><CiShoppingCart size={30}/></button>
                </div>
                <div className="flex justify-between items-start p-3 rounded-md bg-blue-300 min-w-[30%]">
                    <div className="flex flex-col gap-4 items-start justify-start">
                        <p className="font-bold">Profit</p>
                        <p className="font-bold text-[40px]">${overviewData[1].money}</p>
                        <div className="flex">
                            <p className="text-green-700">{overviewData[1].change}%</p><span className="text-gray-600">period of change</span>
                        </div>
                    </div>
                    <button className="border-1 border-blue-500 p-1 rounded-md"><FaDollarSign size={30}/></button>
                </div>
                <div className="flex justify-between items-start p-3 rounded-md bg-blue-300 min-w-[30%]">
                    <div className="flex flex-col gap-4 items-start justify-start">
                        <p className="font-bold">New customer</p>
                        <p className="font-bold text-[40px]">${overviewData[2].money}</p>
                        <div className="flex">
                            <p className="text-green-700">{overviewData[2].change}%</p><span className="text-gray-600">period of change</span>
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
                    <CustomerTable/>
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
    )
}

export default Dashboard