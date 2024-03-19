import GaugeChart from "./GaugeChart";

const Score = () => {
  return (
    <div className="pb-3 w-[95%] flex flex-col  mx-auto  border border-gray-200 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md space-y-2">
      <GaugeChart score={72} max={100} />
      <div className="w-[80%] mx-auto min-h-0.5 bg-gray-200"></div>
      <div className="px-5">
        <h1 className="text-lg font-semibold">You're good!</h1>
        <p className="text-sm text-gray-500">
          Your sales performance score is better than 80% other users
        </p>
      </div>
      <div className="mx-4 border border-gray-400 px-2 py-1 w-fit rounded-2xl hover:bg-black hover:text-white hover:opacity-85 cursor-pointer">
        <span>Improve Score</span>
      </div>
    </div>
  );
};

export default Score;
