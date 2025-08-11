"use client";

import { useState } from "react";
import { FiFilter, FiSearch, FiX } from "react-icons/fi";

const BlogHeader = () => {
  const [showFilter, setShowFilter] = useState(false);

  const filters = [
    "All post",
    "Canada Immigration",
    "Small Business",
    "USA Immigration",
    "Business Immigration",
    "Canada",
    "Canadians",
    "CAPIC",
    "E-2",
    "EB-2 NIW",
    "Franchise",
    "O-1",
    "Start Up Visa",
    "SUV",
  ];

  return (
    <div className="w-full">
      {/* Top header */}
      <div className="flex max-sm:flex-col max-sm:gap-5 justify-between items-center bg-white shadow p-5 relative">
        {/* Filter button */}
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full cursor-pointer"
        >
          <FiFilter />
          <span>Filter by Tags</span>
        </button>

        {/* Search box */}
        <div className="relative w-72">
          <input
            type="text"
            placeholder="Search Products ..."
            className="w-full border-b border-gray px-2 py-1 pr-10 focus:outline-none focus:border-gray"
          />
          <FiSearch className="absolute right-3 top-3 text-gray" />
        </div>

        {/* Filter Sidebar */}
        {showFilter && (
          <div className="absolute top-16 left-0 bg-white shadow-lg border rounded-lg w-60 p-4 z-50">
            {/* Reset filter */}
            <div className="flex justify-between items-center mb-4">
              <button className="text-xs text-gray-500 uppercase font-semibold tracking-wider underline cursor-pointer">
                Reset Filter
              </button>
              <button onClick={() => setShowFilter(false)}>
                <FiX className="text-gray-500" />
              </button>
            </div>

            {/* Filter list */}
            <div className="flex flex-col gap-2 max-h-64 overflow-y-auto">
              {filters.map((filter, i) => (
                <label key={i} className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="accent-red-500" />
                  {filter}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogHeader;
