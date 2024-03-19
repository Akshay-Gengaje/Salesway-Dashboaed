
import LineChart from "./LineChart";

const CustomerByDevices = () => {
  return (
    <div className="w-[95%] mx-auto mt-2 border border-gray-200 shadow-[0_3px_10px_rgb(0,0,0,0.1)] p-2">
      <h1 className="text-lg font-semibold tracking-tighter">
        Customers by devices
      </h1>
      <LineChart />
    </div>
  );
};

export default CustomerByDevices;
