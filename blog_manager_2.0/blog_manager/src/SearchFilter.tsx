import React from "react";

interface SearchFilterProps {
  filterText: string;
  setFilterText: (text: string) => void;
  handleSort: () => void;
  onAddNew: () => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  filterText,
  setFilterText,
  handleSort,
  onAddNew,
}) => {
  return (
    <div className="bg-white shadow-md fixed top-16 left-0 w-full z-40 px-6 py-2 flex justify-between items-center">
      {/* Search Bar */}
      <div className="flex items-center w-full max-w-md border border-gray-300 rounded-md px-3 py-1 bg-gray-100">
        <input
          type="text"
          placeholder="Search"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="w-full bg-transparent outline-none text-gray-600"
        />
      </div>

      {/* Sorting Icon & Add Button */}
      <div className="flex items-center space-x-4">
        <button onClick={handleSort} className="text-gray-500 text-lg">
          <i className="fas fa-sort"></i>
        </button>
        <button
          onClick={onAddNew}
          className="bg-indigo-600 text-white px-5 py-1 rounded-md font-semibold"
        >
          New Project
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
