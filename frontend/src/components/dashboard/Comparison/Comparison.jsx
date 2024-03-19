import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 2,
  borderRadius: 5,
  categoryPercentage: 0.5,
  barPercentage: 0.8,
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
    y: {
      min: 0,
      grid: {
        color: "rgba(0, 0, 0, 0.05)",
      },
      ticks: {
        color: "black",
        fontSize: 14,
        stepSize: 500,
      },
      border: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const data = {
  labels,
  datasets: [
    {
      label: "This Year",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
      backgroundColor: "#b1effe",
    },
    {
      label: "Last Year",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
      backgroundColor: "#0068f7",
    },
  ],
};

const Comparison = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold">Comparison</h1>
        <select
          id="year"
          className="bg-white w-fit border border-gray-300 text-gray-900 text-sm rounded-2xl  p-1.5 focus:ring-blue-500 focus:border-blue-500 block  "
        >
          <option value="6month">6 Months</option>
          <option value="1year">1 Year</option>
        </select>
      </div>
      <div className="w-[100%] h-56">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default Comparison;
