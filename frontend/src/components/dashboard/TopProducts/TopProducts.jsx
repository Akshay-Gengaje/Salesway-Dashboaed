import ProductTable from "./ProductTable";

const TopProducts = () => {
  return (
    <div className="mt-2 max-h-72 overflow-hidden ">
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold">Top Products</h1>
        <button className="border border-gray-200 px-2 py-1 rounded-2xl shadow-sm hover:opacity-85 hover:bg-black hover:text-white">
          Full Result
        </button>
      </div>
      <ProductTable />
    </div>
  );
};

export default TopProducts;
