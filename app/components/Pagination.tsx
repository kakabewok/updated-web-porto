"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function generatePagination(currentPage: number, totalPages: number) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 4, '...', totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = generatePagination(currentPage, totalPages);

  return (
    <div className="flex justify-center items-center gap-1 sm:gap-2">
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className={`px-3 py-2 flex items-center gap-1 transition-colors text-sm ${
          currentPage === 1
            ? "text-text-muted cursor-not-allowed"
            : "text-accent-blue hover:underline"
        }`}
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center">
        {pages.map((page, index) => {
          if (page === '...') {
            return (
              <span key={`ellipsis-${index}`} className="w-8 h-8 flex items-center justify-center text-sm text-text-secondary">
                ...
              </span>
            );
          }

          const pageNumber = page as number;
          return (
            <button
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              aria-label={`Page ${pageNumber}`}
              aria-current={currentPage === pageNumber ? "page" : undefined}
              className={`w-8 h-8 flex items-center justify-center text-sm transition-colors rounded-full ${
                currentPage === pageNumber
                  ? "text-text-primary font-bold pointer-events-none"
                  : "text-accent-blue hover:underline"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className={`px-3 py-2 flex items-center gap-1 transition-colors text-sm ${
          currentPage === totalPages
            ? "text-text-muted cursor-not-allowed"
            : "text-accent-blue hover:underline"
        }`}
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

export default Pagination;
