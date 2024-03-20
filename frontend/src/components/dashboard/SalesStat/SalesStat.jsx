import { useEffect } from "react";
import Card from "./Card";
import { useState } from "react";
import axiosInstance from "../../../api/axiosInstance";

const SalesStat = () => {
  const [data, setData] = useState({
    purchases: 0,
    revenue: 0,
    refunds: 0,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/sample_assignment_api_1/");
        setData(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="my-2 w-full h-20 flex justify-between items-center overflow-x-scroll space-x-8">
      <Card name={"Purchases"} data={data?.purchases || 0} />
      <Card name={"Revenue"} data={"$" + data?.revenue || 0} />
      <Card name={"Refund"} data={"$" + data?.refunds || 0} />
    </div>
  );
};

export default SalesStat;
