const Feedback = () => {
  const data = {
    negative: 67,
    positive: 13,
    neutral: 10,
  };

  const total = Object.values(data).reduce((acc, val) => acc + val, 0);

  const percentages = {};
  for (const key in data) {
    percentages[key] = (data[key] / total) * 100;
  }
  return (
    <div className="w-[95%] mx-auto mt-2 bg-white rounded-md border border-gray-200 shadow-[0_3px_10px_rgb(0,0,0,0.1)] p-2">
      <p className="text-[#a9aaab] text-sm tracking-tighter">
        Community Feedback
      </p>
      <h1 className="text-[1rem] font-semibold ">Mostly Positive</h1>
      <div className="h-fit w-full flex mt-2 py-2 gap-0.5">
        <div
          className={`min-h-2  bg-[#fea7a9] rounded-md`}
          style={{ width: `${percentages.negative}%` }}
        />
        <div
          className={`min-h-2  bg-[#ffd5a1] rounded-md `}
          style={{ width: `${percentages.neutral}%` }}
        />
        <div
          className={`min-h-2  bg-[#a3f0c2] rounded-md`}
          style={{ width: `${percentages.positive}%` }}
        />
      </div>
      <div className="flex gap-4 my-2">
        <div>
          <p className="text-sm text-[#a9aaab]">Negative</p>
          <p className="text-sm font-semibold">{data.negative}</p>
        </div>
        <div>
          <p className="text-sm text-[#a9aaab]">Neutral</p>
          <p className="text-sm font-semibold">{data.neutral}</p>
        </div>
        <div>
          <p className="text-sm text-[#a9aaab]">Positive</p>
          <p className="text-sm font-semibold">{data.positive}</p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
