import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ children }) => {
  return <div style={{ display: "flex" }}>{children}</div>;
};

Pagination.Left = ({ handleClick, disabled }) => (
  <button disabled={disabled} onClick={handleClick}>
    <FaChevronLeft />
  </button>
);
Pagination.Right = ({ handleClick }) => (
  <button onClick={handleClick}>
    <FaChevronRight />
  </button>
);
Pagination.List = ({ count, current }) => {
  const renderedSpans = Array.from({ length: count }, (_, index) => (
    <span
      style={index + 1 === current ? { backgroundColor: "yellow" } : {}}
      key={index}
    >
      {index + 1}
    </span>
  ));

  return <div>{renderedSpans}</div>;
};

export default Pagination;
