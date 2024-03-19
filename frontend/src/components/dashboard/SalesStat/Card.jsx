const Card = ({ name, data }) => {
  return (
    <div className="min-w-full lg:min-w-fit lg:w-full h-full border border-gray-200 shadow-md rounded-lg">
      <h1 className="text-[#8a8a8a] tracking-tighter mt-2 ml-5">{name}</h1>
      <h1 className="text-xl font-semibold mt-3 ml-5">{data}</h1>
    </div>
  );
};

export default Card;
