import Card from "./Card";

const data = {
  purchases: 4294,
  revenue: 322000,
  refunds: 8200,
};
const SalesStat = () => {
  return (
    <div className="my-2 w-full h-20 flex justify-between items-center overflow-x-scroll space-x-8">
      <Card name={"Purchases"} data={data.purchases} />
      <Card name={"Revenue"} data={"$" + data.revenue} />
      <Card name={"Refund"} data={"$" + data.refunds} />
    </div>
  );
};

export default SalesStat;
