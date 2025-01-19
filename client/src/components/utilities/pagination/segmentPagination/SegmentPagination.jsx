// Pagination.jsx
import React from 'react';

const SegmentPagination = ({ currentPage, totalPagesCount, onPageChange }) => {

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPagesCount) {
      onPageChange(page);
    }
  };

  const renderPages = () => {
    const pages = [];

    // Always show first and last pages
    const isFarFromStart = currentPage > 3;
    const isFarFromEnd = currentPage < totalPagesCount - 2;

    if (isFarFromStart) {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={`px-2 py-1 border rounded ${currentPage === 1 ? 'signatureBorder signatureText' : 'border-gray-300 strongText'}`}
        >
          1
        </button>
      );
      pages.push(<span key="start-ellipsis" className="py-1 strongText">.....</span>);
    }

    // Show current page and neighbors
    for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPagesCount, currentPage + 1); i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-2 py-1 border rounded ${currentPage === i ? 'signatureBorder signatureText' : 'border-gray-300 strongText'}`}
        >
          {i}
        </button>
      );
    }

    if (isFarFromEnd) {
      pages.push(<span key="end-ellipsis" className="py-1 strongText">.....</span>);
      pages.push(
        <button
          key={totalPagesCount}
          onClick={() => handlePageChange(totalPagesCount)}
          className={`px-2 py-1 border rounded ${currentPage === totalPagesCount ? 'signatureBorder signatureText' : 'border-gray-300 strongText'}`}
        >
          {totalPagesCount}
        </button>
      );
    }

    return pages;
  };


  return (
    totalPagesCount > 1
    &&
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className={`strongText px-2 py-1 border rounded border-gray-300 ${currentPage === 1 && 'opacity-40 cursor-not-allowed'}`}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {renderPages()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className={`strongText px-2 py-1 border rounded border-gray-300 ${currentPage === totalPagesCount && 'opacity-40 cursor-not-allowed'}`}
        disabled={currentPage === totalPagesCount}
      >
        &gt;
      </button>
    </div>
  );
};

export default SegmentPagination;
