import Comparison from "../components/dashboard/Comparison/Comparison";
import CustomerByDevices from "../components/dashboard/CustomerDevices/CustomerByDevices";
import SalesStat from "../components/dashboard/SalesStat/SalesStat";
import Score from "../components/dashboard/Score/Score";
import TopProducts from "../components/dashboard/TopProducts/TopProducts";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center h-full w-full  ">
      <div className="w-full h-screen lg:max-h-[98%] lg:w-[74%] lg:rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.1)] bg-white px-10 overflow-scroll ">
        <div className="flex flex-col md:flex-row gap-2 lg:gap-0 justify-between lg:items-center mt-5">
          <h1 className="text-2xl font-semibold ">Dashboard</h1>
          <div className="flex gap-3 justify-center items-center text-sm">
            <span className="text-center text-nowrap">Compare to</span>
            <select
              id="year"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl  p-1.5 focus:ring-blue-500 focus:border-blue-500 block w-full "
            >
              <option value="last">Last Year</option>
              <option value="this">This Year</option>
            </select>
          </div>

          {/* Comparison  */}
        </div>
        <SalesStat />
        <Comparison />
        <TopProducts />
      </div>
      <div className="w-full h-screen lg:h-[98%] lg:w-[24%] lg:rounded-xl  ">
        <Score />
        <CustomerByDevices/>
      </div>
    </div>
  );
};

export default Dashboard;
