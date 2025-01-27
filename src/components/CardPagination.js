import React from "react";
import { Pagination } from "react-bootstrap";

const CardPagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <Pagination className="justify-content-center mt-3">
      {[...Array(totalPages).keys()].map((page) => (
        <Pagination.Item
          key={page + 1}
          active={currentPage === page + 1}
          onClick={() => handlePageChange(page + 1)}
        >
          {page + 1}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default CardPagination;
