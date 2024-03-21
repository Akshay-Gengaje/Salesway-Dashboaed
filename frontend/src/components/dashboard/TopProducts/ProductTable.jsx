import { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";
import axios from "axios";

const ProductTable = () => {
  const [data, setData] = useState(null);
  const tableHeaders = [
    "Product",
    "Sold Amount",
    "Unit Price",
    "Revenue",
    "Rating",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/products/`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col mt-2">
      <div className="overflow-x-auto">
        {/* Added a wrapper div with relative positioning */}
        <div className="relative min-w-full inline-block align-middle">
          <div className="">
            <table className="min-w-full divide-y divide-gray-200 ">
              {/* Fixed thead with sticky positioning */}
              <thead className="sticky top-0 z-10">
                <tr>
                  {/* Map table headers */}
                  {tableHeaders.map((header, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="px-1 py-1 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="overflow-y-scroll ">
                {data?.map((row, index) => (
                  <tr className="hover:bg-gray-100" key={index}>
                    <td className=" px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      {row.Product}
                    </td>
                    <td className=" px-3 py-2 whitespace-nowrap text-sm text-gray-800 ">
                      {row.sold_amount}
                    </td>
                    <td className=" px-3 py-2 whitespace-nowrap text-sm text-gray-800 ">
                      {row.unit_price}
                    </td>
                    <td className=" px-3 py-2 whitespace-nowrap text-sm text-gray-800 ">
                      {row.revenue}
                    </td>
                    <td className=" px-3 py-2 whitespace-nowrap text-sm text-gray-800 ">
                      {row.rating}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
