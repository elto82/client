import { Pagination as MuiPagination } from "@mui/material";
import React from "react";

type PaginationProps = {
  propertyPerPage: number;
  totalPropertyCount: number;
  onPageChange: (pageNumber: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  propertyPerPage,
  totalPropertyCount,
  onPageChange,
}) => {
  const pageCount = Math.ceil(totalPropertyCount / propertyPerPage);

  const handlePageChange = (event: React.ChangeEvent<unknown>, pageNumber: number) => {
    event.preventDefault()
    onPageChange(pageNumber);
  };

  return (
    <MuiPagination
      count={pageCount}
      onChange={handlePageChange}
      color="primary"
      size="large"
      sx={{ my: 4, alignSelf: "center" }}
    />
  );
};