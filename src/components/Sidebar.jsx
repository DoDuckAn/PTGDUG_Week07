import { MdOutlineDashboard } from "react-icons/md";
import { CiFolderOn } from "react-icons/ci";
import { TiGroup } from "react-icons/ti";
import { GrAnalytics } from "react-icons/gr";
import { MdIntegrationInstructions } from "react-icons/md";
import version from "../assets/version.png";

const Sidebar=()=>{
    return(
        <div className="bg-white flex flex-col items-center justify-between rounded-lg border p-7 h-full">
            <div className="flex flex-col gap-4 items-start justify-start w-full">
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
    )
}

export default Sidebar