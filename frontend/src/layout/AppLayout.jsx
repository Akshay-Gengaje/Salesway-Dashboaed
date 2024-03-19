import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

const AppLayout = () => {
  return (
    <div
      className="bg-[#f0f0f6] h-fit w-screen  lg:h-[98vh] lg:w-[96vw] m-auto lg:rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.4)]
flex flex-col lg:flex-row gap-5 lg:gap-0 justify-center items-center lg:justify-around lg:items-center overflow-scroll lg:overflow-hidden"
    >
      {/* <div className="hidden lg:block h-[98%] w-[16%]"> */}
      <div className="h-full w-fit">
        <Sidebar />
      </div>
      {/* </div> */}
      <div className="flex-1 w-full lg:h-[98%] ">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
