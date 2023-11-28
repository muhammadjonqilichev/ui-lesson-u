import Table from "./components/Table/index";
import Pagination from "./components/Pagination/index";
import useTable from "./hooks.js";

function App() {
  const { currentPage, nextPage, previousPage } = useTable();
  const maxCount = 5;
  return (
    <>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Header</Table.Th>
            <Table.Th>Header</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>Data</Table.Td>
            <Table.Td>Data</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Data</Table.Td>
            <Table.Td>Data</Table.Td>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tfoot>
          <Table.Tr>
            <Table.Td>Footer</Table.Td>
            <Table.Td>Footer</Table.Td>
          </Table.Tr>
        </Table.Tfoot>
      </Table>
      <Pagination>
        <Pagination.Left
          disabled={currentPage === 1}
          handleClick={previousPage}
        />
        <Pagination.List count={maxCount} current={currentPage} />
        <Pagination.Right
          disabled={currentPage === maxCount}
          handleClick={nextPage}
        />
      </Pagination>
    </>
  );
}

export default App;
