import React from "react";

const Pagination = ({ offset, setOffset, limit }) => {
  const handlePrev = () => setOffset(Math.max(0, offset - limit));
  const handleNext = () => setOffset(offset + limit);

  return (
    <div className="flex justify-between mt-4">
      <button
        className="bg-gray-300 px-4 py-2 rounded"
        disabled={offset === 0}
        onClick={handlePrev}
      >
        Previous
      </button>
      <button
        className="bg-gray-300 px-4 py-2 rounded"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
