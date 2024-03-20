import React, { useState } from "react";
import { TbWindmillFilled } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { ImStatsBars } from "react-icons/im";
import { TiFlowChildren } from "react-icons/ti";
import { MdOutlinePower } from "react-icons/md";
import { FaUsersRectangle } from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";

import MenuItem from "./MenuItem";

const mainMenu = [
  {
    name: "Settings",
    icon: <IoSettingsOutline />,
    path: "/settings",
  },
  {
    name: "Team",
    icon: <FaRegUserCircle />,
    path: "/team",
  },
];

const menu = [
  {
    name: "Dashboard",
    icon: <MdDashboard />,
    path: "/dashboard",
  },
  {
    name: "Campaigns",
    icon: <ImStatsBars />,
    path: "/campaigns",
  },
  {
    name: "Flows",
    icon: <TiFlowChildren />,
    path: "/flows",
  },
  {
    name: "Integrations",
    icon: <MdOutlinePower />,
    path: "/integrations",
  },
  {
    name: "Customers",
    icon: <FaUsersRectangle />,
    path: "/customers",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 z-50  lg:static h-full flex items-start">
      <div
        className=" w-full h-full overflow-hidden bg-white shadow-xl lg:bg-transparent"
        style={{ width: isOpen ? "240px" : "0px", transition: "width 0.3s" }}
      >
        {/* logo */}
        <div className="flex items-center justify-start space-x-1 font-sans ml-5 mt-5 ">
          <span className="text-2xl">
            <TbWindmillFilled />
          </span>
          <h1 className="text-lg font-semibold text-center">Salesway</h1>
        </div>

        <div className="text-gray-700">
          <ul className="mt-7">
            {mainMenu.map((item, index) => {
              return <MenuItem key={index} item={item} />;
            })}
          </ul>
          <p className="ml-4 mt-4">Menu</p>
          <ul className="mt-2">
            {menu.map((item, index) => {
              return <MenuItem key={index} item={item} />;
            })}
          </ul>
        </div>
      </div>
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="bg-white border-l-0 border border-gray-200  py-6 px-[0.5] text-sm block lg:hidden rounded-r-md shadow-xl"
      >
        {isOpen ? (
          <MdArrowForwardIos className="rotate-180" />
        ) : (
          <MdArrowForwardIos />
        )}
      </button>
    </div>
  );
};

export default Sidebar;
