import { useState } from "react";

const UseTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return {
    currentPage,
    nextPage,
    previousPage,
  };
};

export default UseTable;
