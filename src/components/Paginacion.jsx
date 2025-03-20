"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

function Paginacion({ totalPages, onPageChange }) {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const prevPage = currentPage === 1 ? "#" : `?page=${currentPage - 1}`;
  const nextPage =
    currentPage === totalPages ? "#" : `?page=${currentPage + 1}`;

  // Function to generate the page numbers to display
  const getPageNumbers = () => {
    const result = [];

    // Always show first page
    result.push(1);

    // Calculate the range of pages to show around the current page
    let rangeStart = Math.max(2, currentPage - 1);
    let rangeEnd = Math.min(totalPages - 1, currentPage + 1);

    // Adjust range to always show 3 pages if possible
    if (currentPage <= 3) {
      rangeEnd = Math.min(totalPages - 1, 3);
    } else if (currentPage >= totalPages - 2) {
      rangeStart = Math.max(2, totalPages - 2);
    }

    // Add ellipsis after first page if there's a gap
    if (rangeStart > 2) {
      result.push("ellipsis1");
    }

    // Add the range of pages
    for (let i = rangeStart; i <= rangeEnd; i++) {
      result.push(i);
    }

    // Add ellipsis before last page if there's a gap
    if (rangeEnd < totalPages - 1) {
      result.push("ellipsis2");
    }

    // Always show last page if it's not the first page
    if (totalPages > 1) {
      result.push(totalPages);
    }

    return result;
  };

  const pageNumbers = getPageNumbers();

  // Don't render pagination if there's only one page
  if (totalPages <= 1) return null;

  return (
    <nav
      className="flex items-center justify-center space-x-1 md:space-x-2"
      aria-label="Paginación"
    >
      {/* Previous button */}
      <Link
        href={prevPage}
        className={`inline-flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-md border text-sm transition-colors ${
          currentPage > 1
            ? "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            : "pointer-events-none border-gray-200 bg-white text-gray-300"
        }`}
        aria-disabled={currentPage <= 1}
        tabIndex={currentPage <= 1 ? -1 : 0}
      >
        <span className="sr-only">Página anterior</span>
        &lt;
      </Link>

      {/* Page numbers */}
      <div className="flex items-center space-x-1 md:space-x-2">
        {pageNumbers.map((page, index) => {
          if (page === "ellipsis1" || page === "ellipsis2") {
            return (
              <span
                key={page}
                className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center text-sm text-gray-500"
              >
                ...
              </span>
            );
          }

          const isCurrentPage = page === currentPage;

          return (
            <Link
              key={page}
              href={"?page=" + page}
              className={`inline-flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-md text-sm font-medium transition-colors ${
                isCurrentPage
                  ? "bg-gray-900 text-white"
                  : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              }`}
              aria-current={isCurrentPage ? "page" : undefined}
            >
              {page}
            </Link>
          );
        })}
      </div>

      {/* Next button */}
      <Link
        href={nextPage}
        className={`inline-flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-md border text-sm transition-colors ${
          currentPage < totalPages
            ? "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            : "pointer-events-none border-gray-200 bg-white text-gray-300"
        }`}
        aria-disabled={currentPage >= totalPages}
        tabIndex={currentPage >= totalPages ? -1 : 0}
      >
        <span className="sr-only">Página siguiente</span>
        &gt;
      </Link>
    </nav>
  );
}

export default Paginacion;
