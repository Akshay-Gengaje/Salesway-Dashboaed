import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";
ChartJS.register(ArcElement);

const GaugeChart = ({ value = 72, max = 100 }) => {
  const data = {
    datasets: [
      {
        data: [value, max - value],
        backgroundColor: ["#0169f7", "#eeeff2"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    circumference: 180,
    rotation: 270,
    cutout: 80,
    radius: 75,
    legend: { display: false },
    tooltips: { enabled: false },
    ticks: { display: false },
  };

  return (
    <div
      className="relative flex justify-center -mt-10"
      style={{ height: "200px" }}
    >
      <Doughnut data={data} options={options} />
      <div className="absolute text-center w-full top-28 ">
        <h1 className="text-4xl font-semibold">{value}</h1>
        <span className="text-sm text-[#a5a8ae]">of 100 points</span>
      </div>
    </div>
  );
};

export default GaugeChart;
