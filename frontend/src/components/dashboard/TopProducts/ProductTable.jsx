const ProductTable = () => {
  const tableHeaders = [
    "Product",
    "Sold Amount",
    "Unit Price",
    "Revenue",
    "Rating",
  ];

  const rowData = Array.from({ length: 10 }, (_, index) => ({
    product: `Camera Mi ${index + 1}`,
    soldAmount: Math.floor(Math.random() * 1000), // Random sold amount
    unitPrice: Math.floor(Math.random() * 200), // Random unit price
    revenue: Math.floor(Math.random() * 100000), // Random revenue
    rating: (Math.random() * (5 - 1) + 1).toFixed(2), // Random rating between 1 and 5
  }));

  return (
    <div className="flex flex-col">
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
              <tbody className="overflow-y-scroll h-[400px]">
                {rowData.map((row, index) => (
                  <tr className="hover:bg-gray-100" key={index}>
                    <td className=" px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      {row.product}
                    </td>
                    <td className=" px-3 py-2 whitespace-nowrap text-sm text-gray-800 ">
                      {row.soldAmount}
                    </td>
                    <td className=" px-3 py-2 whitespace-nowrap text-sm text-gray-800 ">
                      {row.unitPrice}
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
