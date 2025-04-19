import { MdOutlineDashboard } from "react-icons/md";
import { CiFolderOn } from "react-icons/ci";
import { TiGroup } from "react-icons/ti";
import { GrAnalytics } from "react-icons/gr";
import { MdIntegrationInstructions } from "react-icons/md";
import version from "../assets/version.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "flex items-center gap-3 px-3 py-2 rounded-md bg-pink-500 text-white w-full"
      : "flex items-center gap-3 px-3 py-2 rounded-md hover:bg-pink-100 text-gray-700 w-full";

  return (
    <div className="bg-white flex flex-col items-center justify-between rounded-lg border p-7 h-full">
      <div className="flex flex-col gap-4 items-start justify-start w-full">
        <NavLink to="/" end className={linkClass}>
          <MdOutlineDashboard />
          <p>Dashboard</p>
        </NavLink>
        <NavLink to="/projects" className={linkClass}>
          <CiFolderOn />
          <p>Projects</p>
        </NavLink>
        <NavLink to="/teams" className={linkClass}>
          <TiGroup />
          <p>Teams</p>
        </NavLink>
        <NavLink to="/analytics" className={linkClass}>
          <GrAnalytics />
          <p>Analytics</p>
        </NavLink>
        <NavLink to="/messages" className={linkClass}>
          <GrAnalytics />
          <p>Message</p>
        </NavLink>
        <NavLink to="/integrations" className={linkClass}>
          <MdIntegrationInstructions />
          <p>Integrations</p>
        </NavLink>
      </div>

      <div className="flex flex-col justify-center items-center w-full rounded-lg p-6 bg-blue-300 gap-4 mt-6">
        <img
          src={version}
          width={200}
          height={600}
          className="object-contain"
          alt="version"
        />
        <p className="font-bold text-lg text-white">V2.0 is available</p>
        <button className="rounded-md bg-white border-blue-500 p-2 w-full text-blue-500 border-2 hover:bg-blue-100 transition">
          Try now
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
