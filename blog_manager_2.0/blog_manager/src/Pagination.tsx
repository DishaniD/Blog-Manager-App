import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
  totalEntries: number;
  postsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  totalEntries,
  postsPerPage,
}) => {
  const startIdx = (currentPage - 1) * postsPerPage + 1;
  const endIdx = Math.min(startIdx + postsPerPage - 1, totalEntries);

  return (
    <div className="flex flex-col items-center mt-8">
      <p className="text-gray-700 text-sm mb-2">
        Showing {startIdx} to {endIdx} of {totalEntries} Entries
      </p>
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800"}`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800"}`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
